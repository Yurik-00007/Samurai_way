import React from "react";
import {addMessageActionCreater, updateNewMessageDialogTextActionCreater} from "../../redux/dialogs-reducer";
import {Dialogs, DialogsType, MessagesType} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import {UserProfileType} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import App from "../../App";


/*
export const DialogsContainer = (props: DialogsPageType) => {
    let state = props.store.getState()


    const addMessage = () => {

        props.store.dispatch(addMessageActionCreater())

    }

    const onMessageChange = (text: string) => {
        // props.updateNewMessageDialogText(text)
        props.store.dispatch(updateNewMessageDialogTextActionCreater(text))

    }

    return (

        <Dialogs
            dialogs={ state.dialogsPage.dialogs }
            messages={ state.dialogsPage.messages }
            newText={ state.dialogsPage.newMessageText }
            addMessage={ addMessage }
            updateNewMessageDialogText={ onMessageChange }
        />
    )
}
*/

type MapStatePropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newText: string
    //isAuth: boolean

}

type MapDispatchPropsType = {
    addMessage: () => void
    updateNewMessageDialogText: (newText: string) => void
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newText: state.dialogsPage.newMessageText,
        //isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {

    return {

        addMessage: () => {
            dispatch(addMessageActionCreater())
        },
        updateNewMessageDialogText: (text: string) => {
            dispatch(updateNewMessageDialogTextActionCreater(text))
        },
    }
}

export type DialogsPageType = MapStatePropsType & MapDispatchPropsType

/*const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)*/
export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)


/*
export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))
export default DialogsContainer;
*/
/*
let AuthRedirectComponent=withAuthRedirect(Dialogs)
export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent))
*/
