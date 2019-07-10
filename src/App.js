import React from 'react';
import './App.css';
import DrumMachine from './components/DrumMachine';

const Display= React.lazy(() => import('./components/Display'));

// const Panel= React.lazy(() => import('./components/Panel'));

class App extends React.Component {
  state= {
    isPowerOn: true,
  };

  render()  {
    return (
      <div id='app' className="App">
        <DrumMachine>
          <Display/>
        </DrumMachine>
      </div>
    );
  }
}

export default App;
