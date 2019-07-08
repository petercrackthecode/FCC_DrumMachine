import React from 'react';

export default function Panel(props)    {
    return (
        <div id="Panel">
            Hi there
            {props.children}
        </div>
    );
}