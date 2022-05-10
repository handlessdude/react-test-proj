import React from 'react';
import {IModalState} from "types/ModalTypes";
import {useTypedSelector} from "hooks/useTypedSelector";
import {useActions} from "hooks/useActions";

const Modal: React.FC = () => {
    const {show, customClass, child}: IModalState = useTypedSelector(state => state.modalReducer)
    const {
        hideModal
    } = useActions()
    return (
        <div className={`modal ${customClass}`} style={{ display: show ? 'block' : 'none'}}>
            <div className="overlay" onClick={() => hideModal()}/>
            <div className="modal_content">
                {child}
                <button title="Close" className="close_modal" onClick={() => hideModal()}>
                    &#10006;
                </button>
            </div>
        </div>
    );
}

export default Modal;