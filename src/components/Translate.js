import React, {useState, useEffect} from 'react'
import DropDown from './DropDown';
import {googleLngApi, key} from './api/googleTraslate'
import Axios from 'axios';


const Translate = ({ array, msgs }) => {
const [searchWord, setSearchWord]=useState('');
const [lngChoose, setLngChoose]=useState('');
const [translateText, setTranslateText]=useState([]);



useEffect(() => {
 
   //if Language is set and text then search
   if(lngChoose && searchWord){

   
      const searchTime = setTimeout(() => {
         
        const search = async()=>{

          const { data } =  await Axios.get(googleLngApi ,{
            params:{
              q: searchWord,
              target: lngChoose,
              key: key
            }
          });
          setTranslateText(data.data.translations)
      }
      search()

      }, 500);

      //if person type something then clear timeout
      return () => {
        clearTimeout(searchTime); 
      }

   }

 
}, [lngChoose, searchWord])




const TranslateOptions = ()=>  translateText.map((result, i)=>{
  return <div key={i} className="itemText">{result.translatedText}</div>
})


	return (
		<div className='translate'>
     
			<div className='ui input'>
      <label>Enter Text</label>
        <input 
        type='text' 
        placeholder='Search...' 
        value={searchWord}
        contentEditable="true"
        onChange={(e)=>setSearchWord(e.target.value)}
        />
			</div>
      
			<DropDown array={array} msgs={msgs} outPut={setLngChoose} />

      <div className="output">
        <TranslateOptions />
      </div>
		</div>
	);
};

export default Translate;
