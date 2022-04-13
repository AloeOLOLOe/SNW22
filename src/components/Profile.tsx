import React from "react";
import s from'./Profile.module.css'



export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://st2.depositphotos.com/1035350/7670/i/950/depositphotos_76708101-stock-photo-macon-georgia-in-spring.jpg'/>
            </div>

            <div>Ava+ decription</div>

            <div>
                My post
                <div>
                    New post
                </div>
                <div className={s.post}>
                    <div className={s.item}>
                        Post 1
                    </div>
                    <div className={s.item}>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    )
}