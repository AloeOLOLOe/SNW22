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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <DialogItem name='Dimych' id={0}/>
                </div>
                <div className={s.dialog}>
                    <DialogItem name='Andrei' id={1}/>
                </div>
                <div className={s.dialog}>
                    <DialogItem name='Sveta' id={2}/>
                </div>
                <div className={s.dialog}>
                    <DialogItem name='Sasha' id={3}/>
                </div>
                <div className={s.dialog}>
                    <DialogItem name='Viktor' id={4}/>
                </div>
                <div className={s.dialog}>
                    <DialogItem name='Valera' id={5}/>
                </div>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='how is are you it'/>
                <Message message='yo1'/>
                <Message message='yo2'/>
            </div>
        </div>
    )
}