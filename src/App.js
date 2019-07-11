import DrumMachine from './components/DrumMachine';
import {Display} from './components/Display';

import React from 'react';
import './styles/App.css';

// const Display= React.lazy(() => import('./components/Display'));

/* const Panel= React.lazy(() => import('./components/Panel')); */

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
