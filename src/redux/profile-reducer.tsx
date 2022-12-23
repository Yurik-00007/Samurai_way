import {AddMessageACType, UpdateNewMessageDialogTextACType} from "./dialogs-reducer";

/*type PofilePageType = {
    posts: PostsType[]
    newPostText: string
}*/

type PostsType = {
    id: number
    message: string | undefined
    likesCount: number
}

export type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

export type PhotosType = {
    small: (string)
    large: (string)
}

export  type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string | null
    contacts: ContactsType
    photos: PhotosType
}
export type InitialStateType = {
    posts: PostsType[]
    newPostText: string
    userProfile: UserProfileType
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

type ActionTypes = AddPostACType
    | UpdateNewPostTextACType
    | AddMessageACType
    | UpdateNewMessageDialogTextACType
    | SetUserProfileACType

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!', likesCount: 11},
        {id: 3, message: 'Blalblat!', likesCount: 15},
        {id: 4, message: 'Dada?', likesCount: 17},
    ],
    newPostText: '',
    userProfile: {
        "aboutMe": "",
        "contacts": {
            "facebook": "",
            "website": null,
            "vk": "",
            "twitter": "",
            "instagram": "",
            "youtube": null,
            "github": "",
            "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "",
        "fullName": "",
        "userId": 2,
        "photos": {
            "small": "",
            "large": ""
        }
    }
}


export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0,
            }
            return {...state, newPostText: '', posts: [...state.posts, newPost]};
        case UPDATE_NEW_POST_TEXT:
            // state.newPostText = action.newText
            return {...state, newPostText: action.newText};
        case  SET_USER_PROFILE:
            return {...state, userProfile: action.userProfile};
        default:
            return state;
    }
}


export type AddPostACType = ReturnType<typeof addPostActionCreater>

export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextActionCreater>

export type SetUserProfileACType = ReturnType<typeof setUserProfile>

export const addPostActionCreater = ()/*: AddPostType*/ => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostTextActionCreater = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
} as const)

export const setUserProfile = (userProfile: UserProfileType) => ({
    type: SET_USER_PROFILE, userProfile
} as const)

