import React from "react";
import s from './Dialogs.module.css';
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


export type MessageType = {
    message: string
}
const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    let dialogs = [
        {id: 0, name: 'Dimych'},
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Valera'}
    ]
    let messages = [
        {id: 0, message: 'Hi'},
        {id: 1, message: 'how is are you it'},
        {id: 2, message: 'yo1'},
        {id: 3, message: 'yo2'},
        {id: 4, message: 'yo3'}
    ]
    let dialogsElements = dialogs.map(d => <div><DialogItem name={d.name} id={d.id}/></div>)
    let messageElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>

    )
}