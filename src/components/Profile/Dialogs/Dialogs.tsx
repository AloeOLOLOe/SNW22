import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPageType, ProfilePageType} from "../../../redux/state";



export const Dialogs:React.FC<DialogsPageType> = (props) => {

    let dialogsElements = props.dialogs.map(d => <div><DialogItem name={d.name} id={d.id}/></div>)
    let messageElements = props.messages.map(m => <Message message={m.message}/>)

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