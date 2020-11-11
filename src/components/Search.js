import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {wikiURL} from '../data/data'

const Search = (props) => {
  const [term, setTerm] = useState('');
  const [results, setResults] =useState([]);


  useEffect(() => {

    const search = async()=>{

      const { data } =  await axios.get(wikiURL ,{
          params:{
            action: 'query',
            list: 'search',
            format:  'json',
            srsearch: term
          }
        });


        //put search api in time out if person types something wait
        const timeOutId = setTimeout(() => {
          if(data && term){setResults(data.query.search);}
        }, 1000);

      return () =>{
          // this return it call second time useEffect its execute
        clearTimeout(timeOutId)
      }
    }

    search();
    

  }, [term])


  setTimeout(() => {
    if(term.length <= 1){ console.log('limpiando***'); setResults([])}
  }, 1000);
  

  const RenderedResult = () => results.map((result)=>{
    return <div className="item"  key={result.pageid}>
          <div className="header">
            {result.title}
          </div>
          <div className="description" dangerouslySetInnerHTML={{ __html: result.snippet }}  />
          <div className="ui buttons ">
          <a class="ui right labeled icon button" target='blanck' href={`https://en.wikipedia.org?curid=${result.pageid}`}>
           Read More
            <i className="right chevron icon"></i>
          </a>
        </div>
        </div>
   
  })
 
	return (
    <>
      <div className='ui icon input searchWrap' >
        <i className='search icon'></i>
        <input
          type='text'
          placeholder='Search image here'
          value={term}
          onChange={(e)=>setTerm(e.target.value)}
        />
      </div>
  
      <div className="ui list wrapper search" >
      <RenderedResult />
      </div>
      </>
	);
};

export default Search;
