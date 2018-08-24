import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

export default class ListItem extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    };

    render() {
        return (
            <tr>
                <td>{ this.props.id }</td>
                <td><Link to={ `/list/${ this.props.id }` }>{ this.props.name }</Link></td>
                <td>
                    <button className='btn-video btn btn-success'>Edit</button>
                    <button className='btn-video btn btn-danger'>X</button>
                </td>
            </tr>

        );
    }
}
