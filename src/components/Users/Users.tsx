import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/user.png'
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userID: string) => void
    unFollow: (userID: string) => void
}

export let Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {/* {pages.map(p => <span className={this.props.currentPage === p && s.selectedPage }>{p}</span>*/}
                {pages.map(p => <span
                        className={props.currentPage === p ? s.selectedPage : ''}
                        onClick={() => props.onPageChanged(p)}
                    >
                                {p}</span>
                )}
            </div>

            {/*
                <button onClick={ this.getUsers }>Get Users</button>
*/}

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
                            ? <button onClick={() => props.unFollow(u.id)}>Follow</button>
                            : <button onClick={() => props.follow(u.id)}>Unfollow</button>
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

    )
}

