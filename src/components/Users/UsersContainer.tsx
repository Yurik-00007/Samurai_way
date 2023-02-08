import React from 'react';
import {connect} from "react-redux";
import {
    UserType,
    followAC,
    setCurrentPageAC,
    unFollowAC,
    toggleFetchingProgressAC,
    getUsersThunkCreator,
    followTC,
    unFollowTC,
} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component<UsersPropsType> {


    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
        /*this.props.toggleIsFetchingAC(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                //debugger
                this.props.toggleIsFetchingAC(false)
                this.props.setUsersAC(data.items)
                this.props.setTotalUsersCountAC((data.totalCount === 54) ? data.totalCount : 54)

            });*/
    }


    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPageAC(pageNumber)

        this.props.getUsersTC(pageNumber, this.props.pageSize)

        /*
                usersAPI.getUsers(pageNumber, this.props.pageSize)
                    .then(data => {
                        //debugger
                        this.props.toggleIsFetchingAC(false)
                        this.props.setUsersAC(data.items)
                    });

        */
    }

    render() {
        //debugger
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    //follow={this.props.followAC}
                    //unFollow={this.props.unFollowAC}
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    //toggleFetchingProgress={this.props.toggleFetchingProgressAC}
                    followingInProgress={this.props.followingInProgress}
                    followTC={this.props.followTC}
                    unFollowTC={this.props.unFollowTC}


                />
            </>
        )
    }
}

//type MapStatePropsType = InitialStateType

type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}


type MapDispatchPropsType = {
    //followAC: (userID: number) => void
    //unFollowAC: (userID: number) => void
    //setUsersAC: (users: UserType[]) => void
    //setTotalUsersCountAC: (totalCount: number) => void
    //toggleIsFetchingAC: (isFetching: boolean) => void
    setCurrentPageAC: (pageNumber: number) => void
    toggleFetchingProgressAC: (isFetchingInProgress: boolean, userId: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

export let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    //debugger
    //console.log(state.usersPage)
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            //followAC,
            //unFollowAC,
            //setUsersAC,
            //toggleIsFetchingAC,
            //setTotalUsersCountAC,
            setCurrentPageAC,
            toggleFetchingProgressAC,
            getUsersTC: getUsersThunkCreator,
            followTC,
            unFollowTC
        }),
    withAuthRedirect
)(UsersContainer)

/*export default withAuthRedirect(connect(mapStateToProps,

    {
        //followAC,
        //unFollowAC,
        //setUsersAC,
        //toggleIsFetchingAC,
        //setTotalUsersCountAC,
        setCurrentPageAC,
        toggleFetchingProgressAC,
        getUsersTC: getUsersThunkCreator,
        followTC,
        unFollowTC
    })(UsersContainer))*/

