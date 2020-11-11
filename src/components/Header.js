import React from 'react'

const Header = ({url}) => {

  const active = (selected) =>{
			window.location.href= selected
  }

	return (
		<header className='App-header'>
	
			<div className='ui four item menu'>

        <div className={`item ${url === '/Accordion' ? 'active':''}`} 
          onClick={() => active('Accordion')}>
					Accordion
				</div>

        <div className={`item ${url === '/DropDown' ? 'active':''}`} 
         onClick={() => active('DropDown')}>
					DropDown
				</div>

        <div className={`item ${url === '/Translate' ? 'active':''}`} 
          onClick={() => active('Translate')}>
					Translate
				</div>

				<div className={`item ${url === '/Search' ? 'active':''}`} 
          onClick={() => active('Search')}>
					Wiki Search 
				</div>

			</div>
		</header>
	);
};

export default Header;
