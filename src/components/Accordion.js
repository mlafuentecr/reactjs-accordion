import React, { useState } from 'react';

const Accordion = ({ items }) => {
	const [clikedElement, setclikedElement] = useState('');

	function openAccordionClick(index) {
		if (clikedElement === index) {
			setclikedElement('');
		} else {
			setclikedElement(index);
		}
	}

	const RenderedItems = () =>
		items.map((item, index) => {
      //<React.Fragment is a jsx element and react dosent count so wont make doble border active
      const active = clikedElement === index ? 'active' : '';
			return (
				<div
					key={index}
					className={`accordionItem ${ active }`}
					onClick={() => openAccordionClick(index)}
				>
					<div className='title'>
						{item.title}
						<i className='dropdown icon'> </i>
					</div>
					<div className='content'>{item.content}</div>
				</div>
			);
		});

	return (
		<div className='ui styled accordion'>
			<RenderedItems />
		</div>
	);
};

export default Accordion;
