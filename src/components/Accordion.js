import React, { useState } from 'react';
import { acordionsArray } from '../data/data'

const Accordion = () => {
	const [clikedElement, setclikedElement] = useState('');

	function openAccordionClick(index) {
		if (clikedElement === index) {
			setclikedElement('');
		} else {
			setclikedElement(index);
		}
	}

	const RenderedItems = () =>
	acordionsArray.map((item, index) => {
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
