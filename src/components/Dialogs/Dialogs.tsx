import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import React from "react";
import {Redirect} from "react-router-dom";
import {DialogsPageType} from "./DialogsContainer";

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string | undefined
}

/*export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newText: string
    addMessage: () => void
    updateNewMessageDialogText: (newText: string) => void
    isAuth: boolean

}*/


export const Dialogs = (props: DialogsPageType) => {


    let dialogsElements = props.dialogs.map(d =>
        <DialogItem key={d.id} name={d.name} id={d.id}/>,
    )


    let messagesElements = props.messages.map(m =>
        <Message key={m.id} message={m.message}/>)


    let newMessageElement = React.createRef<HTMLTextAreaElement>()


    const onSendMessageClick = () => {
        /*
                if (newMessageElement.current) {
                let text = newMessageElement.current.value
                props.addMessage(text)
                    newMessageElement.current.value=''
        */
        props.addMessage()
        //props.dispatch(addMessageActionCreater())

    }

    const onNewMessageChange = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value
            props.updateNewMessageDialogText(text)
            //props.dispatch(updateNewMessageDialogTextActionCreater(text))

        }
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                {
                    dialogsElements
                }

                {/*
                <DialogItem name={ dialogs[0].name } id={ dialogs[0].id }/>
                <DialogItem name={ dialogs[1].name } id={ dialogs[1].id }/>
                */}

                {/*
             <DialogItem name={'Dimych'} id={1}/>
*/}


                {/*
               <div className={s.dialog}>
                <NavLink to={'/dialogs/2'}
                     className={navData => navData.isActive ? s.active : s.dialog}>Andrey</NavLink>
               </div>
*/}


                {/*
               <DialogItem name={ 'Sveta' } id={ 3 }/>
                <DialogItem name={ 'Sasha' } id={ 4 }/>
                <DialogItem name={ 'Victor' } id={ 5 }/>
                <DialogItem name={ 'Valera' } id={ 6 }/>
                */}

            </div>

            <div className={s.messages}>

                {messagesElements}

                <div>
                    <textarea onChange={onNewMessageChange} ref={newMessageElement}
                              value={props.newText} placeholder={'Enter your text'}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                    <button>Remove</button>
                </div>


                {/*
                <Message message={ messages[0].message }/>
                <div className={s.message}>
                    Hello World
                </div>*/}
                {/*
                <Message message={ messages[1].message }/>
                <Message message={ messages[2].message }/>
                <Message message={ messages[3].message }/>
                <Message message={ messages[4].message }/>
*/}

            </div>
        </div>
    )
}