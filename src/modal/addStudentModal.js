import React from 'react';
import "../styles/modal.css";

const AddStudentModal = ({ show }) => {

    if (!show) {
        return null;
    }

    return (
        <div className='modal display-block' style={{ justifyContent: 'center', display: 'flex' }}>
            <div className='modal-main'>
                <h2 className='modalhead'>Test Modal</h2>
            </div>
        </div>
    );

};

export default AddStudentModal;
