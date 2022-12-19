type PhotosType = {
    "small": string
    "large": string
}

export type UserType = {
    name: string
    id: string
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

}

//let initialState: InitialStateType

let initialState: InitialStateType = {

    users: [],
    pageSize: 5,
    totalUsersCount: 3,
    currentPage: 3

}


export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes) => {

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
        default:
            return state;
    }
}

type ActionTypes = followACType | unFollowACType | setUsersACType | setCurrentPageACType | setTotalUsersCountACType

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'

export type followACType = ReturnType<typeof followAC>
export type unFollowACType = ReturnType<typeof unFollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>


export const followAC = (userId: string) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        }
    } as const
}
export const unFollowAC = (userId: string)/*: AddPostType*/ => {
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

