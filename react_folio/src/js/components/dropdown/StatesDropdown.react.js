import React from 'react';

class StatesDropdown extends React.Component {
    constructor(props) {
        super(props);
    }
    selectChanged(event) {
    	// console.log('States: ' + event.target.value);
    	this.props.onChange(event.target.value);
    }
    render() {

    	let {options} = this.props;

        return (
        	<div className="selectDropdownWrapper">
				<select className="statesOption" name="" id="" onChange={this.selectChanged.bind(this)}>
					{
						options.map((value, index) => {
							return <option value={value} key={'States Option: ' +index}>{value}</option>;
						})
					}
				</select>
 			</div>
        );
    }
}

export default StatesDropdown;