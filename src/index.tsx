import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from "./redux/redux-store"
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

export let reranderEntireTree = () => {
//export let reranderEntireTree=(state:BasicType)=>{
    //debugger
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        // <App dialogsPage={ state.dialogsPage } profilePage={ state.profilePage }/>,
        document.getElementById('root')
    );
}

reranderEntireTree()
store.subscribe(() => {
    //let state = store.getState()
    reranderEntireTree()
})


//reranderEntireTree(state)
