import React from "react";
import s from './Post.module.css'
import {PostType} from "../../../../redux/state";

type postPropsType={
    id: number
    message: string
    likesCount: number
}

export const Post: React.FC<postPropsType> = (props) => {

    return (
        <div className={s.item}>
            <img className={s.item}
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1A40msInXUn2giqigBdRxwxauu3Lc45CI_A&usqp=CAU'/>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    )
}