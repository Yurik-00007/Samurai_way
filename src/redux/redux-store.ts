import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";

let reducers = combineReducers({
//let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
})
export type AppRootStateType = ReturnType<typeof reducers>

export let store = createStore(reducers)

// @ts-ignore
window.store = store

/*
let a ={
    name:'it',
    protocol:'https',
    maxStudentsCount:10,
    isOnline:true,
    students:['ivan','andrey','farid'],
    classroom:{
        teacher:{
            name:'waw',
            age:18}
    }
}
let b={...a,students:[...a.students],classroom:{...a.classroom,teacher:{...a.classroom.teacher}}}
*/
