import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal } from '../../components/modal/index';
import EditModal  from './edit-modal';
import { editItem } from './actions';

class ListItem extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired,
        youtube: PropTypes.string.isRequired
    };

    edit() {
        const { id, name, youtube } = this.props;

        this.props.dispatch( openModal({
            content: <EditModal id={ id } name={ name } youtube={ youtube } onSave={ editItem } />,
            title: 'Редактировать',
            btnText: 'Сохранить'
        }) );
    }

    render() {
        return (
            <tr>
                <td>{ this.props.id }</td>
                <td><Link to={ `/list/${ this.props.id }` }>{ this.props.name }</Link></td>
                <td>
                    <button className='btn-video btn btn-success' onClick={ this.edit.bind(this) }>Edit</button>
                    <button className='btn-video btn btn-danger'>X</button>
                </td>
            </tr>

        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(ListItem);
