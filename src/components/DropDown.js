import React, { useState } from 'react';


const Dropdown = ( { array, msgs, outPut}) => {


	const [optionSelected, setoptionSelected] = useState('');

	const selectHandle = (e)=>{
		setoptionSelected(e.target.value)
		 outPut(e.target.value)
	}


	const DropDownItem = ({  array }) => {

		const colorOptions = array.map((item) => {
			return (
        <option 
        key={item.value} 
        value={item.value}
        defaultValue="none"
          //react wont use selected but value in select input
        >
				{item.label}
				</option>
			);
		});

		return (
			<div className={`form  dropdownWrap color-${optionSelected}`}>
				<label>{msgs.title}</label>
				<select
         value={optionSelected}
					onChange={selectHandle}
					className='ui dropdown'
				>
					{colorOptions}
				</select>

				<div className='context output'	>
					{optionSelected !== '' ? `${msgs.message} ${optionSelected}` : ''}
				</div>

			</div>
		);
	};

	return (
    <DropDownItem 
    array={array} 
    selection={optionSelected}
    />
	);
};

export default Dropdown;
