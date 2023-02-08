import React from "react";
import {addMessageActionCreater, updateNewMessageDialogTextActionCreater} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


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

let mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {

        addMessage: () => {
            dispatch(addMessageActionCreater())
        },
        updateNewMessageDialogText: (text: string) => {
            dispatch(updateNewMessageDialogTextActionCreater(text))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)