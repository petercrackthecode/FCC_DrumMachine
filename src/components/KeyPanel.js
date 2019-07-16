import React from 'react';

export function KeyPanel(props)    {
    const keys= ['Q', 'W', 'E', 'A', 'S','D', 'Z', 'X', 'C'];

    const playNote= (keyCode) => {

    };

    return (
        <ul id='key-panel'>
            {keys.map(character => <li key={character.id} className='key' data-key={character.charCodeAt(0)} tabIndex='0'><strong>{character}</strong></li>)}

            <audio data-key="81" src="sounds/clap.wav"></audio>
            <audio data-key="87" src="sounds/hihat.wav"></audio>
            <audio data-key="69" src="sounds/kick.wav"></audio>
            <audio data-key="65" src="sounds/openhat.wav"></audio>
            <audio data-key="83" src="sounds/boom.wav"></audio>
            <audio data-key="68" src="sounds/ride.wav"></audio>
            <audio data-key="90" src="sounds/snare.wav"></audio>
            <audio data-key="88" src="sounds/tom.wav"></audio>
            <audio data-key="67" src="sounds/tink.wav"></audio>
        </ul>
    );
}