import React from 'react';

export class KeyPanel extends React.Component   {
    constructor(props)  {
        super(props);
        this.audio= '';
        this.keys= ['Q', 'W', 'E', 'A', 'S','D', 'Z', 'X', 'C'];
    }

    componentDidUpdate()    {

    }

    playNote= (event) => {
        console.log("keyCode= " + event.keyCode);
        console.log("event= " + event);
        this.audio= new Audio(document.querySelector(`audio[data-key= "${event.keyCode}"]`)
                                      .getAttribute('src'));
        console.log("this.audio= " + this.audio);
        this.props.onNoteChange(event.keyCode);
    };

    render() {
        return (
            <ul id='key-panel'>
                {this.keys.map(character =>
                    <li key={character}
                        className='key drum-pad'
                        data-key={character.charCodeAt(0)}
                        tabIndex='0'
                        /* onClick= {this.playNote} */
                        onKeyDown= {this.playNote}
                        ><strong>{character}</strong></li>)}
    
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
}