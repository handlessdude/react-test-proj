import * as UserActionCreators from 'store/action-creators/userActionCreators'
import * as ModalActionCreators from 'store/action-creators/modalActionCreators'

export const ActionCreators = {
    ...UserActionCreators,
    ...ModalActionCreators
}