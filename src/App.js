import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { Route } from "react-router-dom";
import User from './component/User';
import { useState } from 'react';
/*

ERROR-->Not compatible with your version of node/npm: my-app@0.1.0

not able to use React-router-dom. due to time constraint i don't tried to fix this issue

so i use some hack here

*/

  




function App() {
  const [value,setValue]=useState(false)
  return (
    <div className="App">
      <header >
        <div className='btn'><button className='btn2' onClick={() => { value ? setValue(false) : setValue(true) }}>{value ? "back to home" : "wishlist"}</button>
          <img height="100px" src='https://i.gifer.com/CWlk.gif'></img>
        </div>
        
        <div style={value?{"display":"none"}:{"display":"block"}}>
         <Home />
        </div>
        <div>
          <User/>
        </div>
        
        
        
        
        
        
       
        
         
          
        
        
       
        
      </header>
    </div>
  );
}

export default App;
