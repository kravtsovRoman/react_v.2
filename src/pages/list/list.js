import React, { PropTypes } from 'react';
import ListItem from './list-item';
import {connect} from 'react-redux';

class ListPage extends React.Component {

    static path = '/list';

    constructor(props){
        super(props);

    }

    static propTypes = {
        list: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    renderListItems(item, index) {
        return <ListItem key={ index } id={ item.id } name={ item.name }  youtube={ item.youtube }/>;
    }

    render() {
        const items = this.props.list.items;
        return (
            <div className={'row'}>
                <h1>Список видео </h1>
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { items.map(this.renderListItems.bind(this)) }
                    </tbody>
                </table>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        list: state.list
    };
}

export default connect(mapStateToProps)(ListPage);
