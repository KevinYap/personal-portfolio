import React from 'react';

class CategoriesList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CategoriesList';
    }
    render() {
        return <div>CategoriesList</div>;
    }
}

export default CategoriesList;


// (function () {
// 'use strict';

// 	// private properties
// 	var React = require('react');
// 	var $ = require('jquery');
	
// 	var listHeight;
// 	var itemHeight;
	
// 	var CountryList = React.createClass({
		
// 		scrollToValue (toValue, duration) {
// 			var duration = duration || 300;
// 			var theParentElement = $( React.findDOMNode(this.refs.theList) );
// 			theParentElement.animate({scrollTop: toValue}, duration);
// 		},
		
// 		componentDidUpdate() {
// 			// check if highlighted element is in the view, if not, scroll to view
// 			var itemHeight = $( React.findDOMNode(this.refs.theList) ).find('.countryItem').eq(0).outerHeight();
// 			var theParentElement = $( React.findDOMNode(this.refs.theList) );
// 			var theParentHeight = theParentElement.outerHeight();
// 			var highlightedItem = theParentElement.find('._highlight');
// 			var highlightedItemIndex = highlightedItem.index();
			
// 			if ( highlightedItem.position().top < 0 ) {
// 				// item is (partially) hidden from top
// 				this.scrollToValue( itemHeight*(highlightedItemIndex-1) );
				
// 			} else if ( highlightedItem.position().top > theParentHeight - itemHeight ) {
// 				// item is (partially) hidden from bottom
// 				this.scrollToValue( itemHeight*(highlightedItemIndex-8) );
// 			}
// 		},
		
// 		render() {
// 			var props = this.props;
			
// 			return (
// 				<ul className="countryList" ref="theList" hidden={props.display=='block'?false:'hidden'}>
// 					{
// 						props.list.map(function(item, index){
							
// 							var selectedClass = '';
							
// 							if (props.selectedIndex === index) {
// 							    selectedClass = '_highlight';
// 							}
							
// 							return <li onClick={props.onItemClick} key={index} className={`countryItem ${selectedClass}`} data-name={item.name} onMouseEnter={props.onItemMouseEnter.bind(null, index)}>{item.displayName}</li>
// 						})
// 					}
// 				</ul>
// 			)
// 		} // end render
// 	});
	
// 	module.exports = CountryList;

// }());