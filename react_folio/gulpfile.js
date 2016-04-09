var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minify = require('gulp-clean-css');
var gulpIf = require('gulp-if');
var stylus = require('gulp-stylus');
var nib = require('nib');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

// External dependencies you do not want to rebundle while developing, but include in your application deployment
var dependencies = [
	'react',
  	'react-dom',
  	'jquery',
  	'underscore'
];

// keep a count of the times a task refires
var devCount = 0;

// Private Functions ----------------------------------------------------------
function bundleApp(isProduction) {
	devCount++;
	// Browserify will bundle all our js files together in to one and will let us use modules in the front end.
	var appBundler = browserify({
    	entries: './src/js/app.js',
    	debug: true
  	})

	// If it's not for production, a separate vendors.js file will be created the first time gulp is run so that we don't have to rebundle things like react everytime there's a change in the js file
  	if (!isProduction && devCount === 1){
  		// create vendors.js for dev environment.
  		browserify({
			require: dependencies,
			debug: true
		})
			.bundle()
			.on('error', gutil.log)
			.pipe(source('vendors.js'))
			.pipe(buffer())
			.pipe(uglify())
			.pipe(gulp.dest('./build/js/'));
		console.log('vendors init')
  	}
  	if (!isProduction){
  		// make the dependencies external so they dont get bundled by the app bundler. Dependencies are already bundled in vendor.js for development environments.
  		dependencies.forEach(function(dep){
  			appBundler.external(dep);
  		})
  	}

  	appBundler
  		// transform ES6 and JSX to ES5 with babelify
	  	.transform("babelify", {presets: ["es2015", "react"]})
	    .bundle()
	    .pipe(source('bundle.js'))
	    .pipe(buffer())
	    .pipe(sourcemaps.init({ loadMaps: true }))
			.pipe(plumber({
	        	handleError: function (err) {
	            	console.log(err);
	            	this.emit('end');
	        	}
	    	}))
	    	.pipe(uglify())
	    	.on('error',gutil.log)
		.pipe(sourcemaps.write('./'))
	    .pipe(gulp.dest('./build/js/'))
	    .pipe(browserSync.stream()) // browser sync
	    console.log('finished compiling')
}

// Compile styl to css
gulp.task('stylus', function () {
	return gulp.src('./src/styl/app.styl')
		.pipe(sourcemaps.init())
		.pipe(plumber({
        	handleError: function (err) {
            	console.log(err);
            	this.emit('end');
        	}
    	}))
		.pipe(stylus({ // Using gulp-stylus
			paths:  ['node_modules'],
			import: ['jeet/stylus/jeet', 'nib', 'rupture/rupture'], // import jeet,nib,rupture
          	use: [nib()],
          	'include css': true
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(sourcemaps.write('./maps')) // start write sourcemaps
		.pipe(gulp.dest('./build/css'))
		.pipe(browserSync.stream()) // browser sync
});

// Browser Sync task
gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: 'build'
		},
		//tunnel: 'maxis.rewards'
	})
});

// Concat js files for build
gulp.task('concat', function() {
	console.log('start concat')
	return gulp.src(['./build/js/vendors.js', './build/js/bundle.js'])
		.pipe(concat('build.js'))
		.pipe(gulp.dest('./build/js/'))
});

// Minifies css/js files for build
gulp.task('compress', function() {
	return gulp.src('build/css/**/*.css')
	    .pipe(minify())
		.pipe(gulp.dest('build/css'))
});


// Development -----------------------------------------------------------------------
gulp.task('dev', function () {
    bundleApp(false);
});

// Production ------------------------------------------------------------------------
gulp.task('prod', function (){
	bundleApp(true);
});

// Watch -----------------------------------------------------------------------------
gulp.task('watch', ['browserSync', 'stylus'], function () {
	gulp.watch('./src/styl/**/*.styl', ['stylus']);
	gulp.watch('./build/**/*.html', browserSync.reload);
	gulp.watch('./src/js/**/*.{js,jsx}', ['dev']);
});

// Default ---------------------------------------------------------------------------
gulp.task('default', ['dev','watch']);

// Build -----------------------------------------------------------------------------
gulp.task('build', ['stylus','prod','compress']);