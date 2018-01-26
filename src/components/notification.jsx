import React from 'react';

const Notification = (props) => {

    return(
        <div className={props.css}> 
            <p> {props.text}</p>
        </div>
    );
}

export default Notification;
