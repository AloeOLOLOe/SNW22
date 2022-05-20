import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    name: string
    id: number
}
export const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = '/dialogs/' + props.id;
    return (

        <NavLink to={path}>{props.name}</NavLink>
    )
}