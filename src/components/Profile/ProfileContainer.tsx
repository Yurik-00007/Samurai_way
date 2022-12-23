import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {InitialStateType, setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {stat} from "fs";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


//export type ProfilePageType = InitialStateType


/*
profilePage: PofilePageType
dispatch: (action: ActionTypes) => void
addPost: () => void
updateNewPostText: (newText: string) => void
newText: string*/


class ProfileContainer extends React.Component<OwnProps> {

    componentDidMount() {

        let userId = +this.props.match.params.userId
        console.log(userId)
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            });

    }

    render() {

        return <div>
            <Profile {...this.props} profile={this.props.userProfile}/>


        </div>
    }
}

type MapStatePropsType = { userProfile: UserProfileType }

type MapDispatchPropsType = {
    setUserProfile: (userProfile: UserProfileType) => void
}


// type PathParams

export type ProfilePageType = MapStatePropsType & MapDispatchPropsType
type OwnProps = RouteComponentProps<{ "userId": string }> & ProfilePageType

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    userProfile: state.profilePage.userProfile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)