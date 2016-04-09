import React from 'react';
import CategoriesList from '../dropdown/CategoriesList.react';

class CategoriesDropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    selectChanged(event) {
    	// console.log('Categories: ' + event.target.value);
    	this.props.onChange(event.target.value);
    }

    render() {

    	let {options} = this.props;

        return (
        	<div className="selectDropdownWrapper">
				<select className="categoriesOption" name="" id="" onChange={this.selectChanged.bind(this)}>
					{
						options.map((value, index) => {
							return <option value={value} key={'Category Option: '+index}>{value}</option>;
						})
					}
				</select>
 			</div>
        );
    }
}

export default CategoriesDropdown;