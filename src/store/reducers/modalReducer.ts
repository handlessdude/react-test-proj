import { IModalState,  ModalActionTypes, IModalAction} from "types/ModalTypes"
import React from "react";

const initialState: IModalState = {
    child: React.createElement("div"),
    customClass: '',
    show: false,
    closeCallback: () => false
}

export const modalReducer = (state = initialState, action: IModalAction): IModalState => {
    switch (action.type) {
        case ModalActionTypes.MODAL_HIDE:
            return {
                ...state,
                show: false
            }
        case ModalActionTypes.MODAL_SHOW:
            return {
                ...state,
                child: action.payload.child,
                customClass: action.payload.customClass,
                show: true,
            }
        default:
            return state
    }
}