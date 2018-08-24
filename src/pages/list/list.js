import React from 'react';
import ListItem from './list-item';

export default class ListPage extends React.Component {

    static path = '/list';

    constructor(props){
        super(props);

        this.state = {
            items: [
                1, 2, 3
            ]
        };
    }

    renderListItems(item, index) {
        return <ListItem key={ index } id={ item } />;
    }

    render() {
        return (
            <div>
                <h1>List Page</h1>
                <ul>
                    { this.state.items.map(this.renderListItems.bind(this)) }
                </ul>
            </div>
        );
    }
}
