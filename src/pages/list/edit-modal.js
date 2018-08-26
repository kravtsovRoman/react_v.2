import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../components/modal/index';

class EditModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            name: this.props.name,
            youtube: this.props.youtube
        };
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        youtube: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onSave: PropTypes.func.isRequired
    };

    close() {
        this.props.dispatch(closeModal());
    }

    save() {
        this.props.dispatch(this.props.onSave(this.state));
        this.close();
    }

    changeName(e) {
        this.setState({ name: e.target.value });
    }


    changeLink(e) {
        this.setState({ youtube: e.target.value });
    }

    render() {
        return (
            <div>
                <div className='modal-body form-group'>
                    <p><b>ID: </b> { this.state.id } </p>
                    <input
                        className={ 'w-100 form-control' }
                        type='text'
                        onChange={ this.changeName.bind(this) }
                        value={ this.state.name }
                    />
                    <br/>
                    <input
                        className={ 'w-100 form-control' }
                        type='text'
                        onChange={ this.changeLink.bind(this) }
                        value={ this.state.youtube }
                    />
                </div>
                <div className='modal-footer'>
                    <button type='button' className='btn btn-secondary' onClick={ this.close.bind(this) }>Закрыть</button>
                    <button type='button' className='btn btn-primary' onClick={ this.save.bind(this) } > Сохранить </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(EditModal);

