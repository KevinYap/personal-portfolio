import React from 'react';
import $ from 'jquery';

class RewardsTncList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let tncListArray = this.props.tncList.map((tnc, index) => {
            return <li key={'tnc '+index} dangerouslySetInnerHTML={{__html: tnc}}></li>;
        });

        return (
        	<div className="rewardsTncList" data-id={this.props.id}>
                <ul>
                    {tncListArray}
                </ul>
            </div>
        );
    }
}

export default RewardsTncList;
