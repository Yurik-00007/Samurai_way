import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export type ProfilePageType = {

    /*
    profilePage: PofilePageType
    dispatch: (action: ActionTypes) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newText: string*/

}
export const Profile = (props: ProfilePageType) => {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer

            // posts={ props.profilePage.posts }
            // newPostText={ props.profilePage.newPostText }
            // dispatch={ props.dispatch }
            /*
                        addPost={ props.addPost }
                        updateNewPostText={ props.updateNewPostText }
            */
            //newText={ props.newText }
        />
    </div>
}
