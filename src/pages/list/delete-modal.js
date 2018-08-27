import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../components/modal/index';

class DeleteModal extends React.Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onDelete: PropTypes.func.isRequired
    };

    cancel() {
        this.props.dispatch(closeModal());
    }
    deleteItem() {
        this.props.dispatch(this.props.onDelete(this.props.id));
        this.cancel();
    }

    render() {
        return (
            <div>
                <div className='modal-body form-group'>
                    <p><b>{ this.props.id } - </b> { this.props.name } </p>
                </div>
                <div className='modal-footer'>
                    <button
                        type='button'
                        className='btn btn-secondary'
                        onClick={ this.cancel.bind(this) }
                    >Отмена</button>
                    <button
                        type='button'
                        className='btn btn-danger'
                        onClick={ this.deleteItem.bind(this) }
                    > Удалить </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(DeleteModal);

