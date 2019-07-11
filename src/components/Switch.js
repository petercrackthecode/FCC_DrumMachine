import React from 'react';

export function Switch(props)  {
    return (
        <label className='switch' for={props.switchName}>
            <strong>{props.switchName}</strong>
            <input type='checkbox' name={props.switchName}/>
            <span className='theme'></span>
        </label>
    );
}