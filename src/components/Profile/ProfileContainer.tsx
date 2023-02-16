import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatusTC, getUserProfileTC, updateStatusTC, UserProfileType} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


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
            userId = 26920//2
        }
        //debugger
        this.props.getUserProfileTC(userId)
        this.props.getStatusTC(userId)

        //axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        // usersAPI.getProfile(userId)
        //     .then(data => {
        //         this.props.setUserProfileAC(data)
        //         //debugger
        //     });

    }

    render() {
        //console.log(this)
        /*   if (!this.props.isAuth) {
               return <Redirect to={'/login'}/>
           }*/
        return <div>
            <Profile {...this.props} />
        </div>
    }
}

export type MapStatePropsType = {
    userProfile: UserProfileType
    status: string
    // isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfileTC: (userId: number) => void
    getStatusTC: (userId: number) => void
    updateStatusTC: (status: string) => void
}


// type PathParams

export type ProfilePageType = MapStatePropsType & MapDispatchPropsType
type OwnProps = RouteComponentProps<{ "userId": string }> & ProfilePageType

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status
    //isAuth: state.auth.isAuth

})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC}),
    withRouter,
    //withAuthRedirect,
)
(ProfileContainer)

/*export default withAuthRedirect(withRouter(connect(mapStateToProps,
    {getUserProfileTC})(ProfileContainer)))*/


/*
let AuthRedirectComponent=withAuthRedirect(ProfileContainer)
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps,
    {getUserProfileTC})(WithUrlDataContainerComponent)
*/
