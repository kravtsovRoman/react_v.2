import  React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {closeModal} from './actions';

class Modal extends React.Component {

    static propTypes = {
        modal: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    close() {
        this.props.dispatch( closeModal() );
    }

    render() {
        const { isOpen, title, content, btnText } = this.props.modal;

        if (!isOpen) return null;

        return (
            <div className='modal fade show ' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>{ title }</h5>
                            <button type='button' className='close' onClick={ this.close.bind(this) }>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            { content }
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' onClick={ this.close.bind(this) }>Закрыть</button>
                            <button type='button' className='btn btn-primary'> { btnText } </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modal
    };
}

export default connect(mapStateToProps)(Modal);

