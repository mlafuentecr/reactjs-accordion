import React from 'react'
import logo from '../components/images/logo512.png'
const Header = ({url}) => {



	return (
		<header className='App-header'>
			<div className="logo">
				<img src={logo} alt="logo"/>
			</div>
			<div className='ui four item menu'>

        <a className={`item ${url === '/Accordion' ? 'active':''}`} 
          href='Accordion'>
					Accordion
				</a>

        <a className={`item ${url === '/DropDown' ? 'active':''}`} 
         href='DropDown'>
					DropDown
				</a>

        <a className={`item ${url === '/Translate' ? 'active':''}`} 
          href='Translate'>
					Translate
				</a>

				<a className={`item ${url === '/Search' ? 'active':''}`} 
          href='Search'>
					Wiki Search 
				</a>

			</div>
		</header>
	);
};

export default Header;
