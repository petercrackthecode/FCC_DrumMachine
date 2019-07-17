import React from 'react';

export function Display(props)  {
    return (
        <div id='display'>
            {props.m_isPowerOn ?
                ((props.m_notePlaying !== '') ? props.m_notePlaying : "Let's play some note!") :
                'Turn power on to play some music'}
        </div>
    );
}

