import React, {useRef} from "react";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

export type MyPostsPageType = {}


/*
export const MyPostsContainer = (props: MyPostsPageType) => {
    let state = props.store.getState()


    const addPost = () => {
        props.store.dispatch(addPostActionCreater())
        //props.addPost()
    }
    let onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreater(text)
        props.store.dispatch(action)
        //props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
        //props.updateNewPostText(text)


    }


    return (
        <MyPosts
            updateNewPostText={ onPostChange }
            addPost={ addPost }
            posts={ state.profilePage.posts }
            newPostText={ state.profilePage.newPostText }/>
    )
}
*/


const mapStateToProps = (state: AppRootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextActionCreater(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreater())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)