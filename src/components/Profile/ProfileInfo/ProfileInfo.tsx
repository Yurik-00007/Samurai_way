import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt={'pic'}
                     src={'https://tinypng.com/images/social/website.jpg'}/>
            </div>
            <div className={s.discriptionBlock}>
                ava+discription
            </div>

        </div>
    )

}
