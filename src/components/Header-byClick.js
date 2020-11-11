import React, {useState, useEffect} from 'react'

const Header = ({setmenuSelected, menuSelected}) => {

  const [selectedClass, setselectedClass]=useState('Accordion');

  const active = (selected) =>{
    setmenuSelected(selected)
    setselectedClass(selected)
  }

	useEffect(() => {
		//put the the initial menu from app
		//the first time
		setmenuSelected(menuSelected)
    setselectedClass(menuSelected)
	}, [menuSelected]);

	return (
		<header className='App-header'>
	
			<div className='ui four item menu'>

        <div className={`item ${selectedClass === 'Accordion' ? 'active':''}`} 
          onClick={() => active('Accordion')}>
					Accordion
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
