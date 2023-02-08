import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";
import {ProfilePageType} from "./ProfileContainer";


/*export type ProfilePageType = {
    profile: UserProfileType
    /!*
        profilePage: PofilePageType
        dispatch: (action: ActionTypes) => void
        addPost: () => void
        updateNewPostText: (newText: string) => void
        newText: string
    *!/

}*/
export const Profile = (props: ProfilePageType) => {
    /*        if (!props.isAuth) {
                return <Redirect to={'/login'}/>
            }*/
    //debugger
    return <div>
        <ProfileInfo profile={props.userProfile}/>
        <MyPostsContainer/>
    </div>
}
