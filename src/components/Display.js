import React from 'react';

export function Display(props)  {
    return (
        <div id='display'>{props.isPowerOn ?
            ((props.note !== '') ? props.note : "Let's play a note") :
            'Turn power on to play some music'}</div>
    );
}

