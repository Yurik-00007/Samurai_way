import {AddPostACType, UpdateNewPostTextACType} from "./profile-reducer";
import {AddMessageACType, UpdateNewMessageDialogTextACType} from "./dialogs-reducer";

type ActionTypes = AddPostACType | UpdateNewPostTextACType | AddMessageACType | UpdateNewMessageDialogTextACType


export type SidebarType = {
    friends: FriendsType[]
}

export type FriendsType = {
    id: number,
    name: string
}

let initialState = {
    friends: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionTypes) => {

    return state
}