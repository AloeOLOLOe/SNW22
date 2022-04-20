import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <div >
            <div>
                <img src='https://st2.depositphotos.com/1035350/7670/i/950/depositphotos_76708101-stock-photo-macon-georgia-in-spring.jpg'/>
            </div>

            <div>Ava+ decription</div>

            <MyPosts/>
        </div>
    )
}