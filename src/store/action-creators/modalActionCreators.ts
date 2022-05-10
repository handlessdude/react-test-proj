import {IModalAction, ModalActionTypes} from "types/ModalTypes";

export const showModal = (child: JSX.Element, customClass = ""): IModalAction => {
    return { type: ModalActionTypes.MODAL_SHOW, payload: { child, customClass } }
}

export const hideModal = (): IModalAction => {
    return { type: ModalActionTypes.MODAL_HIDE }
}