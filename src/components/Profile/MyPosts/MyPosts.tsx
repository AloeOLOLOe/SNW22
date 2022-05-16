import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";


export const MyPosts = () => {

    let posts = [
        {id: 0, message: "hello", likesCount: 11},
        {id: 1, message: "bye", likesCount: 22}
    ]
    let postElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div><textarea></textarea></div>
            <div>
                <button>Add post</button>
                <button>Delete</button>
            </div>
            <div>

            </div>
            <div className={s.post}>
                {postElements}
            </div>
        </div>
    )
}