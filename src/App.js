import React from 'react';
import './App.css';
import Panel from './components/Panel';

const Display= React.lazy(() => import('./components/Display'));

// const Panel= React.lazy(() => import('./components/Panel'));

class App extends React.Component {
  state= {
    isPowerOn: true,
  };

  render()  {
    return (
      <div id='drum-machine' className="App">
        <Panel>
          <Display/>
        </Panel>
      </div>
    );
  }
}

export default App;
