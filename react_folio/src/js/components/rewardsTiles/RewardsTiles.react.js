import React from 'react';
import $ from 'jquery';
import RewardsTncList from './RewardsTncList.react';

class RewardsTiles extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick(title) {
        $(".rewardsTncList[data-id='"+title+"']").slideToggle();
        $(".rewardsTncHeader[data-id='"+title+"']").toggleClass('active');
    }
    render() {
        let {contentImage, tncList, title, contentText} = this.props.data;

        return (
        	<div className="rewardsTiles">
                <div className="rewardsContent clearfix">
                    <div className="rewardsContentImage">
                        <img src={contentImage} />
                    </div>
                    <div className="rewardsContentText">
                        <h2>{title}</h2>
                        <div className="description">
                            {
                                contentText.map((description, index) => {
                                    return <p key={'Description: ' + index} dangerouslySetInnerHTML={{__html: description}}></p>;
                                })
                            }
                        </div>
                    </div>
                </div>
                <a onClick={this.handleClick.bind(null, title)} data-id={title} href="javascript:void(0);" className="rewardsTncHeader">
                    Terms &amp; Conditions
                </a>
                <RewardsTncList id={title} tncList={tncList} />
            </div>
        );
    }
}

export default RewardsTiles;
