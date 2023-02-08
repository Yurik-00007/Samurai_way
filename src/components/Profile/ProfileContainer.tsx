import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC, UserProfileType} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


//export type ProfilePageType = InitialStateType


/*
profilePage: PofilePageType
dispatch: (action: ActionTypes) => void
addPost: () => void
updateNewPostText: (newText: string) => void
newText: string*/


class ProfileContainer extends React.Component<OwnProps> {

    componentDidMount() {
        let userId: number = +this.props.match.params.userId
        //console.log(typeof userId)
        if (!userId) {
            userId = 2
        }
        //debugger
        this.props.getUserProfileTC(userId)
        //axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        // usersAPI.getProfile(userId)
        //     .then(data => {
        //         this.props.setUserProfileAC(data)
        //         //debugger
        //     });

    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }

        return <div>
            <Profile {...this.props} />


        </div>
    }
}

type MapStatePropsType = {
    userProfile: UserProfileType
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfileTC: (userId: number) => void
}


// type PathParams

export type ProfilePageType = MapStatePropsType & MapDispatchPropsType
type OwnProps = RouteComponentProps<{ "userId": string }> & ProfilePageType

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    userProfile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth

})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps,
    {getUserProfileTC})(WithUrlDataContainerComponent)