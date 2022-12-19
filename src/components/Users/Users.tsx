import React from 'react';
import s from './users.module.css';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

type ComponentUsersPropsType = UsersPropsType

class Users extends React.Component<ComponentUsersPropsType> {


    componentDidMount() {
        //componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    /*
        getUsers = () => {
            if (this.props.users.length === 0) {
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${}`)
                    .then(response => {
                        this.props.setUsers(response.data.items)
                    });
            }
        }
    */

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount((response.data.totalCount === 54) ? response.data.totalCount : 54)
            });

    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {/* {pages.map(p => <span className={this.props.currentPage === p && s.selectedPage }>{p}</span>*/}
                    {pages.map(p => {
                            return <span
                                className={this.props.currentPage === p ? s.selectedPage : ''}
                                onClick={() => this.onPageChanged(p)}
                            >
                                {p}</span>
                        }
                    )}
                </div>

                {/*
                <button onClick={ this.getUsers }>Get Users</button>
*/}

                {this.props.users.map(u =>
                    <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                             alt={'1'}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => this.props.unfollow(u.id)}>Follow</button>
                            : <button onClick={() => this.props.follow(u.id)}>Unfollow</button>
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
}

export default Users;