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
    m_note: '',
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

  render()  {
    return (
      <div id='app' className="App">
        <DrumMachine>
          <Display {...this.state}/>
          <section id='controls'>
            <KeyPanel {...this.state}/>
            <div id='buttons'>
              <Switch switchName='Power' onHandleChange={this.handlePowerChange} isPowerOn={this.state.m_isPowerOn}/>
              <VolumeBar handleVolumeChange={this.handleVolumeChange} m_volume={this.state.m_volume}/>
              {/*<Switch switchName='Bank'/>*/}
            </div>
          </section>
        </DrumMachine>
      </div>
    );
  }
}

export default App;
