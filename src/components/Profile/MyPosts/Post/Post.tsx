import React from "react";
import s from './Post.module.css'

export const Post = () => {
    return (
        <div className={s.item}>
            <img className={s.item}
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1A40msInXUn2giqigBdRxwxauu3Lc45CI_A&usqp=CAU'/>
            Post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}