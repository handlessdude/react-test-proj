export interface IModalState {
    child: JSX.Element,
    customClass?: string,
    show: boolean,
    closeCallback: Function,
}

export enum ModalActionTypes {
    MODAL_HIDE= "MODAL_HIDE",
    MODAL_SHOW = "MODAL_SHOW",
}

interface IModalShowAction {
    type: ModalActionTypes.MODAL_SHOW;
    payload: {
        child: JSX.Element,
        customClass: string,
    }
}

interface IModalHideAction {
    type: ModalActionTypes.MODAL_HIDE;
}

export type IModalAction =
    | IModalShowAction
    | IModalHideAction;