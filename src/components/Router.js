import Accordian from './Accordion'
import Search from './Search'
import DropDown from './DropDown'
import { dropDownColorArray, dropDownColorsMsg, dropDowntransArray, dropDownTranslatesMsg} from '../data/data';

import Translate from './Translate'

  

    const Route = ({url})=>{
      if( url === '/' || url === '/DropDown' ){ return <DropDown array={dropDownColorArray} msgs={dropDownColorsMsg} outPut={(e)=>console.log(e)} /> }
      if(url === '/Translate') { return <Translate array={dropDowntransArray} msgs={dropDownTranslatesMsg}  />}
      if(url === '/Accordion') { return <Accordian />}
      if(url === '/Search')    { return <Search/>}
    }

    export default Route
