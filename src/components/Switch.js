import React from 'react';

export function Switch(props)  {
    return (
        <div className='switch'>
            {/*<label for={props.switchName}><strong>{props.switchName}</strong></label>*/}
            <input type='range' name={props.switchName} min='0' max='100' value='50' step='1'/>
        </div>
    );
}