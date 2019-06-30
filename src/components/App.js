import React, { useReducer, useEffect} from 'react';
import reducer, { initialState} from '../state/reducer';
import PubSub from  '../pubsub';
import PublishMessage from './PublishMessage'
import MessageBoard from './MessageBoard';
import Context from '../context';

const pubsub = new PubSub();

setTimeout(()=>{
    pubsub.publish({type:'foo', value:'bar'});
}, 1000);


function App (){
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        pubsub.addListener({
            message: messageObject=>{
                const { channel, message} = messageObject;
                console.log('Received Message', message, 'channel', channel);
                dispatch(message);
            }
        })
    }, []);

    return (
        <Context.Provider value={{state, dispatch, pubsub }}>
            <h2>Reaction</h2>
            <hr />
            <PublishMessage />
            <MessageBoard />
        </Context.Provider>
    )
}


export default App;