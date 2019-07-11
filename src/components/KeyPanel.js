import React from 'react';

export function KeyPanel(props)    {
    const keys= ['Q', 'W', 'E', 'A', 'S','D', 'Z', 'X', 'C'];

    return (
        <ul id='key-panel'>
            {keys.map(character => <li key={character.id} className='key'><strong>{character}</strong></li>)}
        </ul>
    );
}