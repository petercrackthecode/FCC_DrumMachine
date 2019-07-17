import React from 'react';

export function VolumeBar(props)    {
    const onVolumeChange= (event) => {
        props.handleVolumeChange(event.target.value);
    };

    return (
        <div id='volume-bar'>
            <label htmlFor='volume-bar'>Volume: {props.m_volume}</label><br/>
            <input name='volume-bar' type='range' min='0'
                max='100' step='1' value={props.m_volume}
                onInput={onVolumeChange}/>
        </div>
    );
}