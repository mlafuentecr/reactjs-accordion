import React, {useState} from 'react'
import './css/App.css';
import Header from './Header'
import Accordian from './Accordion'
import Search from './Search'
import DropDown from './DropDown'

function App() {

  const [menuSelected ,setmenuSelected] = useState('DropDown');


    const MenuChoosen = ()=>{

        if(menuSelected === 'List'){
          return   <>List</>
        }else if(menuSelected === 'DropDown'){
          return  <DropDown />
        }else if(menuSelected === 'Translate'){
          return  <>Translate</>
        }else if(menuSelected === 'Accordion'){
          return  <Accordian />
        }else{
          return  <Search/>
        }
        
    }

    console.log(menuSelected);

  return (
    <div className='App'>
      <Header setmenuSelected={setmenuSelected} menuSelected={menuSelected}/>
     <MenuChoosen />
  </div>
  );
}

export default App;
