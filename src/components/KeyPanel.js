import React from 'react';

export class KeyPanel extends React.Component   {
    constructor(props)  {
        super(props);
        this.keys= ['Q', 'W', 'E', 'A', 'S','D', 'Z', 'X', 'C'];
        this.audioPath= [
            "../sounds/clap.wav", "../sounds/hihat.wav", "../sounds/kick.wav", "../sounds/openhat.wav",
            "../sounds/boom.wav", "../sounds/ride.wav", "../sounds/snare.wav", "../sounds/tom.wav",
            "../sounds/tink.wav"
        ];
    }

    componentDidUpdate()    {

    }

    playNoteOnKeyDown= (event) => {
        console.log("key is " + event.key);
        let audio= document.getElementById(event.key.toUpperCase());
        if (!audio) return;
        audio.currentTime= 0;
        audio.play();
        this.props.onNoteChange(event.key.toUpperCase());
    };

    playNoteOnClick= (event) => {
        console.log(event.currentTarget.id.toString()[0]);
        let audio= document.getElementById(event.currentTarget.id.toString()[0]);
        if (!audio) return;
        audio.currentTime= 0;
        audio.play();
        this.props.onNoteChange(event.currentTarget.id.toString()[0]);
    }

    render() {
        return (
            <ul id='key-panel'>
                {this.keys.map((character, index) =>
                    <li key={character}
                        id={`${character}-drumpad`}
                        className='drum-pad'
                        tabIndex='0'
                        onClick= {this.playNoteOnClick}
                        onKeyDown= {this.playNoteOnKeyDown}>
                        <strong>{character}</strong>
                        <audio id={character} className='clip' src={this.audioPath[index]}></audio>
                    </li>)}
            </ul>
        );
    }
}