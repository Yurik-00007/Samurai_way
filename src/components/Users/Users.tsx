import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/user1.png'
import {followTC, unFollowTC, UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    //follow: (userID: number) => void
    //unFollow: (userID: number) => void
    //toggleFetchingProgress: (isFetchingInProgress: boolean, userId: number) => void
    followingInProgress: Array<number>
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
}

export let Users = (props: UsersPropsType) => {
    //debugger
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {/* {pages.map(p => <span className={this.props.currentPage === p && s.selectedPage }>{p}</span>*/}
                {pages.map((p, index) => {
                        //debugger
                        return <span
                            key={index}
                            className={props.currentPage === p ? s.selectedPage : ''}
                            onClick={() => props.onPageChanged(p)}>
                                {p}</span>
                    }
                )}
            </div>

            <div>
                {props.users.map(u =>
                    <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                             alt={'1'}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.unFollowTC(u.id)

                                }
                                }>Unfollow</button>

                            : <button
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.followTC(u.id)
                                }}>Follow</button>

                        }
                    </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                    </div>)}
            </div>
        </div>

    )
}

