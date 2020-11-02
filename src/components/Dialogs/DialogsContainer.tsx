import {addMessage} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'
import {AppStateType} from '../../redux/redux-store'
import {DialogType, MessageType} from '../../redux/types/types'

type MapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
}
type MapStateToPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
};

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
    (mapStateToProps, {addMessage}), withAuthRedirect)(Dialogs)
