import DrumMachine from './components/DrumMachine';
import {Display} from './components/Display';
import {KeyPanel} from './components/KeyPanel';
import {Switch} from './components/Switch';
import {VolumeBar} from './components/VolumeBar';

import React from 'react';
import './styles/App.css';

// const Display= React.lazy(() => import('./components/Display'));

/* const Panel= React.lazy(() => import('./components/Panel')); */

class App extends React.Component {
  state= {
    m_isPowerOn: true,
    m_notePlaying: '',
    m_volume: 40,

  };

  handleVolumeChange= (volume) => {
    this.setState({
      m_volume: volume
    });
  };

  handlePowerChange= () => {
    this.setState(currentState => ({
      m_isPowerOn: !currentState.m_isPowerOn,
    }));
  };

  handleNoteChange= (notePlaying) => {
    this.setState({
      m_notePlaying: notePlaying,
    });
  };

  render()  {
    return (
      <div id='app' className="App">
        <DrumMachine>
          <Display {...this.state}/>
          <section id='controls'>
            <KeyPanel {...this.state} onNoteChange={this.handleNoteChange}/>
            <div id='buttons'>
              <Switch switchName='Power' onHandleChange={this.handlePowerChange} isPowerOn={this.state.m_isPowerOn}/>
              <VolumeBar handleVolumeChange={this.handleVolumeChange} m_volume={this.state.m_volume}/>
            </div>
          </section>
        </DrumMachine>
      </div>
    );
  }
}

export default App;
