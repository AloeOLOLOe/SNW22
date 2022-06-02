import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MessageType} from "./MyPosts/Post/Post";

export type ProfilePageType={
    posts:Array<MessageType>
}
export const Profile = () => {
    let posts = [
        {id: 0, message: "hello", likesCount: 11},
        {id: 1, message: "bye", likesCount: 22},
        {id: 1, message: "2322", likesCount: 22},
        {id: 1, message: "2333322", likesCount: 22}
    ]
    return (
        <div >
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}