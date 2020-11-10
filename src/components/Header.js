import React, {useState} from 'react'

const Header = ({setmenuSelected}) => {

  const [selectedClass, setselectedClass]=useState('Accordion');

  const active = (selected) =>{
    setmenuSelected(selected)
    setselectedClass(selected)
  }

	return (
		<header className='App-header'>
	
			<div className='ui five item menu'>

        <div className={`item ${selectedClass === 'Accordion' ? 'active':''}`} 
          onClick={() => active('Accordion')}>
					Accordion
				</div>

        <div className={`item ${selectedClass === 'List' ? 'active':''}`} 
         onClick={() => active('List')}>
					List
				</div>

        <div className={`item ${selectedClass === 'DropDown' ? 'active':''}`} 
         onClick={() => active('DropDown')}>
					DropDown
				</div>

        <div className={`item ${selectedClass === 'Translate' ? 'active':''}`} 
          onClick={() => active('Translate')}>
					Translate
				</div>

				<div className={`item ${selectedClass === 'Search' ? 'active':''}`} 
          onClick={() => active('Search')}>
					Wiki Search 
				</div>

			</div>
		</header>
	);
};

export default Header;
