import {DialogsType, MessagesType} from "../components/Dialogs/Dialogs";
import {AddPostACType, UpdateNewPostTextACType} from "./profile-reducer";

type ActionTypes = AddPostACType | UpdateNewPostTextACType | AddMessageACType | UpdateNewMessageDialogTextACType


type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}


let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
    ],
    messages: [
        {id: 1, message: 'Hello World'},
        {id: 2, message: 'How is your IT-KAMASUTRA'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yoyo'},
    ],
    newMessageText: 'it-kamasutra.com',

}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            // state.messages.push(newMessage)
            //state.newMessageText = ''
            return {...state, newMessageText: '', messages: [...state.messages, newMessage]};
        case UPDATE_NEW_MESSAGE_DIALOG_TEXT:
            //state.newMessageText = action.newText
            return {...state, newMessageText: action.newText};
        default:
            return state;
    }
}

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_DIALOG_TEXT = 'UPDATE-NEW-MESSAGE-DIALOG-TEXT'

export type AddMessageACType = ReturnType<typeof addMessageActionCreater>
export type UpdateNewMessageDialogTextACType = ReturnType<typeof updateNewMessageDialogTextActionCreater>

export const addMessageActionCreater = ()/*: AddPostType*/ => {
    return {
        type: ADD_MESSAGE
    } as const
}
export const updateNewMessageDialogTextActionCreater = (text: string)/*: AddPostType*/ => {
    return {
        type: UPDATE_NEW_MESSAGE_DIALOG_TEXT,
        newText: text
    } as const
}


