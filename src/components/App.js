import React, { useReducer } from 'react';
import reducer, { initialState} from '../state/reducer';
import {newMessage} from '../state/actions';
import PublishMessage from './PublishMessage'

function App (){
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Reaction</h2>
            <hr />
            <PublishMessage dispatch={dispatch} />
        </div>
    )
}


export default App;