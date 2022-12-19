import {AddMessageACType, UpdateNewMessageDialogTextACType} from "./dialogs-reducer";

type ActionTypes = AddPostACType | UpdateNewPostTextACType | AddMessageACType | UpdateNewMessageDialogTextACType


type PofilePageType = {
    posts: PostsType[],
    newPostText: string
}

type PostsType = {
    id: number
    message: string | undefined
    likesCount: number
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!', likesCount: 11},
        {id: 3, message: 'Blalblat!', likesCount: 15},
        {id: 4, message: 'Dada?', likesCount: 17},
    ],
    newPostText: 'it-kamasutra.com',

}

export const profileReducer = (state: PofilePageType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0,
            }
            //state.posts.push(newPost)
            //state.newPostText = ''
            return {...state, newPostText: '', posts: [...state.posts, newPost]};
        case UPDATE_NEW_POST_TEXT:
            // state.newPostText = action.newText
            return {...state, newPostText: action.newText}
                ;
        default:
            return state;
    }
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type AddPostACType = ReturnType<typeof addPostActionCreater>
export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextActionCreater>

export const addPostActionCreater = ()/*: AddPostType*/ => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostTextActionCreater = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
} as const)

