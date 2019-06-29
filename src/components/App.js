import React, { useReducer } from 'react';
import reducer, { initialState} from '../state/reducer';
import {newMessage} from '../state/actions';
import PublishMessage from './PublishMessage'
import MessageBoard from './MessageBoard';
import Context from '../context';

function App (){
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{state, dispatch }}>
            <h2>Reaction</h2>
            <hr />
            <PublishMessage />
            <MessageBoard />
        </Context.Provider>
    )
}


export default App;