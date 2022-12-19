import React, {useRef} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/profile-reducer";

type PostsType = {
    id: number
    message: string | undefined
    likesCount: number
}


export type MyPostsPageType = {
    posts: PostsType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void

    /*
        addPost: () => void
        updateNewPostText: (newText: string) => void
        newText: string
    */


}


export const MyPosts = (props: MyPostsPageType) => {
    /*let posts = [
        {id: 1, message: 'Hi,how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!', likesCount: 11},
        {id: 3, message: 'Blalblat!', likesCount: 15},
        {id: 4, message: 'Dada?', likesCount: 17},
    ]*/
    //console.log(props)
    //const [posts] = props

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
            //props.dispatch(updateNewPostTextActionCreater(text))
            //props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
            //props.updateNewPostText(text)


        }

    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>
            New posts
            <div className={s.posts}>
                {postsElements}
                {/*
                <Post message={ posts[0].message } like={ posts[0].likesCount }/>
                <Post message={ posts[1].message } like={ posts[1].likesCount }/>
*/}
            </div>
        </div>
    )
}
