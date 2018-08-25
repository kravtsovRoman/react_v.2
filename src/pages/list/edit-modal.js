import React from 'react';

export default class EditModal extends React.Component {

    render() {
        return (
            <div>
                <div className='modal-body'>

                </div>
                <div className='modal-footer'>
                    <button type='button' className='btn btn-secondary'>Закрыть</button>
                    <button type='button' className='btn btn-primary'> Сохранить </button>
                </div>
            </div>
        );
    }
}
