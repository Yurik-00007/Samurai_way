import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {getAuthUserDataTC} from "../../redux/auth-reducer";

type MapDispatchPropsType = {
    getAuthUserDataTC: () => void
}
type MapStatePropsType = {
    isAuth: boolean
    login: string
}

class HeaderConteiner extends React.Component<HeaderPropsType> {

    componentDidMount() {

        /*
                axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                    withCredentials: true
                })
        */
        this.props.getAuthUserDataTC()
        /* authMeAPI.me()
             .then(data => {
                 //debugger
                 if (data.resultCode === 0) {
                     let {id: userId, login, email} = data.data
                     this.props.setAuthUsersDataAC(userId, login, email)
                 }
             });*/
    }

    render() {

        return <Header {...this.props} />
    }
}

export const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

export default connect(mapStateToProps, {getAuthUserDataTC})(HeaderConteiner)