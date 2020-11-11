import React, {useState} from 'react'
import './css/App.css';
import Header from './Header'
import Accordian from './Accordion'
import Search from './Search'
import DropDown from './DropDown'
import { dropDownColorArray, dropDownColorsMsg, dropDowntransArray, dropDownTranslatesMsg} from '../data/data';

import Translate from './Translate'


function App() {

  const [menuSelected ,setmenuSelected] = useState('Translate');


    const MenuChoosen = ()=>{

        if(menuSelected === 'List'){
          return   <>List</>
        }else if(menuSelected === 'DropDown'){
          return  <DropDown 
          array={dropDownColorArray}
          msgs={dropDownColorsMsg}
          outPut={(e)=>console.log(e)}
          />
        }else if(menuSelected === 'Translate'){
          return  <Translate 
          array={dropDowntransArray}
          msgs={dropDownTranslatesMsg}
           />
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
