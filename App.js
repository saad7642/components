import './App.css';
import './views/Dashboard'
import './views/Details'
import './views/PostAd'
import { useState } from 'react';
import Dashboard from './views/Dashboard';
import Details from './views/Details';

import PostAd from './views/PostAd';

function App() {

  const [screen, setScreen] = useState()

  function updatedscreen(screen){
    setScreen(screen)
  }
  return (
    <div className="App">
      <header className="App-header">
        
    <div>
    <h1>WelCome to Dashboard</h1>
    <img src = "https://tse2.mm.bing.net/th?id=OIP.R-LBlBHlEPzYlUYaJwZISwHaE_&pid=Api&P=0&h=220"/>
    </div>
    <div> 
    <button onClick = {()=> updatedscreen('Details')}>Details</button>
    <button onClick = {()=> updatedscreen('PostAd')}>PostAd</button>
    </div>

        
        {screen === 'Details' && <Details />}
        {screen === 'PostAd' && <PostAd />}



      </header>
    </div>
  );
}

export default App