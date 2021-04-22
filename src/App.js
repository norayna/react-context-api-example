import logo from './logo.svg';
import './App.css';
import LightContext from './LightContext'
import Main from './Main'
import {useState} from 'react'

function App() {
    const [light, setLight] = useState(true)

  return (
      <div>
          <button onClick={ () => setLight(!light) }>
              {light ? 'LIGHT IS ON' : 'LIGHT IS OFF'}
          </button>

          <LightContext.Provider value={{ light: light }}>
              <Main />
          </LightContext.Provider>
      </div>

  );
}

export default App;
