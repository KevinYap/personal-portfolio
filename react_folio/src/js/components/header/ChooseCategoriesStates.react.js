import React from 'react';
import $ from 'jquery';
import CategoriesDropdown from '../dropdown/CategoriesDropdown.react';
import StatesDropdown from '../dropdown/StatesDropdown.react';

class ChooseCategoriesStates extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="chooseCategoriesStatesWrapper">
        		<h1 className="dropdownTitle">Rewards</h1>
    			<CategoriesDropdown options={this.props.categoryData} onChange={this.props.onCategoryChange} />
    			<StatesDropdown options={this.props.statesData} onChange={this.props.onStateChange} />
        	</div>
        );
    }
}

export default ChooseCategoriesStates;
