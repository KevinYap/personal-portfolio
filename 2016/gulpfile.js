var gulp = require('gulp'); // tells Node to look into the node_modules folder for a package named gulp
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var runSequence = require('run-sequence');
var nib = require('nib');
var browserSync = require('browser-sync').create();

gulp.task('hello', function(){
	console.log('Hello K!');
});

// Compile stylus to css
gulp.task('stylus', function(){
	return gulp.src('app/styl/app.styl')
		.pipe(sourcemaps.init()) // Using gulp-sourcemaps
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
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({ // browser sync
	     	stream: true
	    }))
});

// Gulp watch task
gulp.task('watch', ['browserSync', 'stylus'], function(){
	// Reloads the browser whenever HTML or JS files change
	// Other watchers (can be multiple watcher)
	gulp.watch('app/styl/**/*.styl', ['stylus']);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

// Browser Sync task
gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: 'app'
		},
	})
});

// Useref task (concat files)
gulp.task('useref', function(){
	return gulp.src('app/*.html')
		.pipe(useref())
		// Minifies if it's a JavaScript file or CSS file
	    .pipe(gulpIf('*.js', uglify()))
	    .pipe(gulpIf('*.css', cssnano()))
	    .pipe(gulp.dest('dist'))
});

// Optimizing images task
gulp.task('images', function(){
	return gulp.src('app/img/**/*.+(png|jpg|gif|svg)')
		.pipe(cache(imagemin({ // create cache for images
			interlaced: true
		})))
		.pipe(gulp.dest('dist/img'))
});

// Clear cache
gulp.task('cache:clear', function (callback) {
	return cache.clearAll(callback)
});

// Copy fonts to dist folder
gulp.task('fonts', function() {
  	return gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'))
});

// Cleaning in dist folder
gulp.task('clean:dist', function() {
  	return del.sync('dist');
});

// Development
gulp.task('default', function(callback) {
  	runSequence(['stylus','browserSync', 'watch'], callback)
})

// Build all the stuff into dist (Production)
gulp.task('build', function(callback) {
  	runSequence('clean:dist', ['stylus', 'useref', 'images', 'fonts'], callback)
});