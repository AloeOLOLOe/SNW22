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
    let dialogsData = [
        {id: 0, name: 'Dimych'},
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Valera'}
    ]
    let messagesData = [
        {id: 0, message: 'Hi'},
        {id: 1, message: 'how is are you it'},
        {id: 2, message: 'yo1'},
        {id: 3, message: 'yo2'},
        {id: 4, message: 'yo3'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialogs + ' ' + s.active}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                </div>

                <div className={s.dialogs}>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                </div>

                <div className={s.dialogs}>
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                </div>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
            </div>
        </div>

    )
}