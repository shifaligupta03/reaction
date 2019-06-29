import React, { Component } from 'react';

const MessageBoard = ( {messages})=>{
    return(
        <div>
            {
                messages.map(messageItem=>{
                    const {id, text, timestamp} = messageItem;
                    return ( <div key={id}>
                        <h4>{new Date(timestamp).toLocaleString()}</h4>
                        <p>{text}</p>
                        <hr />
                    </div>

                    );
                })
            }
        </div>
    )
}

export default MessageBoard;