import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";

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