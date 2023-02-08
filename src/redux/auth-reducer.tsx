import actions from "redux-form/lib/actions";
import {store} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";


export type InitialStateType = {
    userId: string,
    login: string,
    email: string,
    isAuth: boolean,
    /*
        isFetching: boolean
    */
}

let initialState: InitialStateType

initialState = {
    userId: '',
    login: '',
    email: '',
    isAuth: false,
    //isFetching: false
}

const SET_USERS_DATA = 'SET-USERS-DATA'

export const authReducer = (state: InitialStateType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case SET_USERS_DATA:
            //debugger
            return {
                ...state,
                ...action.data,
                isAuth: true
            };

        default:
            return state;
    }
}

type ActionTypes = setUsersDataACType


export type setUsersDataACType = ReturnType<typeof setAuthUsersDataAC>


export const setAuthUsersDataAC = (userId: string,
                                   login: string,
                                   email: string,
) => {
    return {
        type: SET_USERS_DATA,
        data: {
            userId,
            login,
            email,
        }
    } as const
}

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(res => {
            //debugger
            if (res.resultCode === 0) {
                let {id: userId, login, email} = res.data
                dispatch(setAuthUsersDataAC(userId, login, email))
            }
        });
}
