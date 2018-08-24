import React, { PropTypes } from 'react';

export default class ItemDetails extends React.Component {

    static propTypes = {
        match: PropTypes.any.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id
        };
    }

    render() {
        return (
            <div>
                <h1>Item Details Page { this.state.id } works!</h1>
            </div>
        );
    }
}
