export type MessageType = {
    id ?: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id ?: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogsPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}
export type RootStateType={
    profilePage:ProfilePageType,
    dialogsPage:DialogsPageType
}
export let state:RootStateType = {
    profilePage: {
        posts: [
            {id: 0, message: "hello", likesCount: 11},
            {id: 1, message: "bye", likesCount: 22},
            {id: 1, message: "2322", likesCount: 22},
            {id: 1, message: "2333322", likesCount: 22}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 0, name: 'Dimych'},
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Viktor'},
            {id: 5, name: 'Valera'}
        ],
        messages: [
            {id: 0, message: 'Hi'},
            {id: 1, message: 'how is are you it'},
            {id: 2, message: 'yo1'},
            {id: 3, message: 'yo2'},
            {id: 4, message: 'yo3'}
        ]
    }
}

