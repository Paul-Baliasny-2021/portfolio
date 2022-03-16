import * as React from 'react'
import crossIcon from '../../images/CloseIcon.svg'
import './Modal.css';

function Modal(props) {
    return (
        <div className={props.isOpen ? 'modal_active' : 'modal'}>
            <figure className="modal__pic-container">
                <button type="button" className="modal__closer" onClick={props.onClose}><img src={crossIcon} alt="Closing cross" className="modal__x" /></button>
                <img src={props.img} alt="User" className="modal__image" />
                <figcaption className="modal__image-title">{props.title}</figcaption>
            </figure>
        </div>
    )
}

export default Modal;