import React from "react";
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";

type ProfileInfoType = {
    profile: UserProfileType

}

export const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader/>
    } else
        return (
            <div>
                <div>
                    <img alt={'pic'}
                         src={'https://tinypng.com/images/social/website.jpg'}/>
                </div>
                <div className={s.discriptionBlock}>
                    <img src={props.profile.photos.large}/>
                    <div>Обо мне: {props.profile.aboutMe}</div>
                    <div>facebook: {props.profile.contacts.facebook}</div>
                    <div>twitter: {props.profile.contacts.twitter}</div>
                    <div>instagram: {props.profile.contacts.instagram}</div>
                    <div>facebook: {props.profile.contacts.facebook}</div>
                    <div>LookingForAJob:{props.profile.lookingForAJob
                        ? <img src={'https://novvedomosti.ru/images/articles/e4k7crpyuu.jpg'}/>
                        : <img
                            src={'https://img2.doktornarabote.ru/image/publicationthumbnailattachment/838bb331-74e4-4596-9d57-e6947cd515bd'}/>}
                    </div>
                    <div>fullName:{props.profile.fullName.toUpperCase()}</div>

                    {/*
                    <div>{props.profile.aboutMe}</div>
                    <div>{props.profile.contacts}</div>
*/}
                    ava+discription
                </div>

            </div>
        )

}
