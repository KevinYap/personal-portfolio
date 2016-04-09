import React from 'react';
import $ from 'jquery';
import _ from 'underscore';

class KevinYap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    loadDetailsFromJSON() {
        $.ajax({
            url: window.portfolioDataURL,
            dataType: 'json',
            success: (data) => {
                this.setState({
                    tilesData: data
                });
                // console.log(data);
            },
            error: (xhr, status, err) => {
                console.error(xhr, status, err.toString());
            }
        });
    }

    componentDidMount() {
        this.loadDetailsFromJSON();
    }

    render() {

        // return (
        	
        // );
    }
}

export default KevinYap;