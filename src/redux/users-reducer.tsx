import actions from "redux-form/lib/actions";
import {store} from "./redux-store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

type PhotosType = {
    "small": string
    "large": string
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: PhotosType
    status: string,
    followed: boolean,
    /*
        id: string
        photoURL: string
        followed: boolean,
        fullName: string,
        status: string,
        location: UserLocationType
    */
}

type UserLocationType = {
    city: string
    country: string
}

export type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    //isFetchingInProgress: boolean
    followingInProgress: Array<number>
}

//let initialState: InitialStateType

let initialState: InitialStateType = {

    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    //isFetchingInProgress: false,
    followingInProgress: [],
}
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FETCHING_PROGRESS = 'TOGGLE-IS-FETCHING-PROGRESS'

export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes) => {
    //debugger
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)};
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)
            };
        case SET_USERS:
            return {...state, users: action.payload.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.payload.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.payload.isFetching}
        case TOGGLE_IS_FETCHING_PROGRESS:
            //debugger
            return {
                ...state, followingInProgress: action.payload.isFetchingInProgress
                    ? [...state.followingInProgress, action.payload.userId,]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        default:
            return state;
    }
}

type ActionTypes = followACType
    | unFollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingACType
    | toggleFetchingProgressACType


export type followACType = ReturnType<typeof followAC>
export type unFollowACType = ReturnType<typeof unFollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export type toggleFetchingProgressACType = ReturnType<typeof toggleFetchingProgressAC>


export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        }
    } as const
}
export const unFollowAC = (userId: number)/*: AddPostType*/ => {

    return {
        type: UNFOLLOW,
        payload: {
            userId
        }

    } as const
}

export const setUsersAC = (users: UserType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage
        }
    } as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {
            count: totalCount
        }
    } as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    } as const
}
export const toggleFetchingProgressAC = (isFetchingInProgress: boolean, userId: number) => {
    //debugger
    return {
        type: TOGGLE_IS_FETCHING_PROGRESS,
        payload: {
            isFetchingInProgress,
            userId
        }
    } as const
}


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {

    return (
        /*(dispatch: Dispatch<ActionTypes>) => {*/
        (dispatch: Dispatch) => {

            dispatch(toggleIsFetchingAC(true))

            usersAPI.getUsers(currentPage, pageSize)
                .then(data => {
                    //debugger
                    dispatch(toggleIsFetchingAC(false))
                    dispatch(setUsersAC(data.items))
                    dispatch(setTotalUsersCountAC((data.totalCount === 54)
                        ? data.totalCount
                        : 54))

                });
        }
    )
}
export const followTC = (userId: number) => {

    return (
        /*(dispatch: Dispatch<ActionTypes>) => {*/
        (dispatch: Dispatch) => {

            dispatch(toggleFetchingProgressAC(true, userId))
            usersAPI.followUser(userId)
                .then(data => {
                    //debugger
                    if (data.resultCode === 0) {
                        dispatch(followAC(userId))
                    }
                    dispatch(toggleFetchingProgressAC(false, userId))
                });

        }
    )
}
export const unFollowTC = (userId: number) => {
    return (
        (dispatch: Dispatch) => {

            dispatch(toggleFetchingProgressAC(true, userId))
            usersAPI.unFollowUser(userId)
                .then(data => {
                    //debugger
                    if (data.resultCode === 0) {
                        dispatch(unFollowAC(userId))
                    }
                    dispatch(toggleFetchingProgressAC(false, userId))
                });

        }
    )
}
