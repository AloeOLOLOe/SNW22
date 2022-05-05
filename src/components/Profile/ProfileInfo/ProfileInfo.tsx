import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div >
                <img className={s.img} src='https://st2.depositphotos.com/1035350/7670/i/950/depositphotos_76708101-stock-photo-macon-georgia-in-spring.jpg'/>
            </div>

            <div className={s.descriptionBlock}>Ava+ decription</div>
        </div>
    )
}