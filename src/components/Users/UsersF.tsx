import React, {useEffect} from 'react';
import s from './users.module.css';
import {UsersPropsType} from "./UsersContainer";
import {v1} from "uuid";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

type ComponentUsersPropsType = UsersPropsType

export const UsersF = (props: ComponentUsersPropsType) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                });

            /*
                    props.setUsers([
                        {
                            id: v1(),
                            photoURL: 'data:image/jpeg;base64,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',
                            followed: false,
                            fullName: 'Dmitry',
                            status: 'I am a boss',
                            location: {city: 'Minsk', country: 'Belarus'}
                        },
                        {
                            id: v1(),
                            photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxWbKl4enjRUeWSrcKxhYwr3B2WvtBUHcVA&usqp=CAU',
                            followed: true,
                            fullName: 'Sasha',
                            status: 'I am a boss too',
                            location: {city: 'Moscow', country: 'Russia'}
                        },
                        {
                            id: v1(),
                            photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJ7kyw6pbs-ckw3gipmh6NPZVMle2ZT1vxw&usqp=CAU',
                            followed: false,
                            fullName: 'Andrew',
                            status: 'I am a boss too',
                            location: {city: 'Kiev', country: 'Ukrain'}
                        },
                        {
                            id: v1(),
                            photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_JwQcwLJQGi-JQ9wlg4tEQEqzXFp_JtK0Q&usqp=CAU',
                            followed: true,
                            fullName: 'Victor',
                            status: 'I am a teacher',
                            location: {city: 'Minsk', country: 'Belarus'}
                        },

                    ])
            */
        }
    }
    useEffect(() => getUsers(), [])

    return (
        <div>
            {/*
            <button onClick={ getUsers }>Get Users</button>
*/ }

            { props.users.map(u =>
                <div key={ u.id }>
                <span>
                    <div>
                        <img className={ s.userPhoto } src={ u.photos.small != null ? u.photos.small : userPhoto }/>
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={ () => props.unfollow(u.id) }>Follow</button>
                            : <button onClick={ () => props.follow(u.id) }>Unfollow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{ u.name }</div>
                        <div>{ u.status }</div>
                    </span>
                    <span>
                        <div>{ 'u.location.country' }</div>
                        <div>{ 'u.location.city' }</div>
                    </span>
                </span>
                </div>) }
        </div>
    );
};

export default UsersF;