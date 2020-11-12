import React from 'react'
import './css/App.css';
import Header from './Header'
import Route from './Router'


function App() {
  const url = window.location.pathname;

  return (
    <div className='App'>
     <Header url={url} />
     <div className="routerWrap"><Route url={url}/></div>
  </div>
  );
}

export default App;
