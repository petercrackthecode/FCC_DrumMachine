import React from "react";

import hihat from "../sounds/hihat.wav";
import boom from "../sounds/boom.wav";
import clap from "../sounds/clap.wav";
import kick from "../sounds/kick.wav";
import openhat from "../sounds/openhat.wav";
import ride from "../sounds/ride.wav";
import snare from "../sounds/snare.wav";
import tink from "../sounds/tink.wav";
import tom from "../sounds/tom.wav";

export class KeyPanel extends React.Component {
  constructor(props) {
    super(props);
    this.keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    this.audioPath = [hihat, boom, clap, kick, openhat, ride, snare, tink, tom];
  }

  componentDidMount() {
    document.addEventListener("keydown", this.playNoteOnKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown");
  }

  playNote = key => {
    let audio = document.getElementById(key);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    this.props.onNoteChange(key);
  };

  playNoteOnKeyDown = event => {
    const key = event.key.toUpperCase();
    this.playNote(key);
  };

  playNoteOnClick = event => {
    const key = event.currentTarget.dataset.key;
    this.playNote(key);
  };

  render() {
    return (
      <ul id="key-panel">
        {this.keys.map((character, index) => (
          <li
            key={index}
            data-key={character}
            id={`drumpad-${character}`}
            className="drum-pad"
            tabIndex="0"
            onClick={this.playNoteOnClick}
          >
            <strong>{character}</strong>
            <audio
              id={character}
              className="clip"
              src={this.audioPath[index]}
            />
          </li>
        ))}
      </ul>
    );
  }
}
