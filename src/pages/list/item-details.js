import React, { PropTypes } from 'react';
import { store } from '../../index';

export default class ItemDetails extends React.Component {

    static propTypes = {
        match: PropTypes.any.isRequired
    };

    constructor(props) {
        super(props);

        const item = this.getCurrentItemFromStore();

        this.state = {
            id: item.id,
            name: item.name,
            youtube: item.youtube
        };

    }

    getCurrentItemFromStore() {
        const { items } = store.getState().list;
        const index = items.findIndex(item => item.id === Number(this.props.match.params.id));

        return {
            id: items[index].id,
            name: items[index].name,
            youtube: items[index].youtube
        };
    }

    render() {
        return (
            <div className='row'>
                <div className='col-sm-12 '>
                    <div className='card card-primary mt-5'>
                        <div className='card-header'>
                            <b>#{ this.state.id }</b> { this.state.name }
                        </div>
                        <div className='card-body text-center'>
                            <iframe
                                width={600}
                                height={400}
                                src={`https://www.youtube.com/embed/${ this.state.youtube }`}
                                frameBorder='0'
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
