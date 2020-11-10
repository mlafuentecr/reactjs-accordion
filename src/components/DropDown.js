import React, { useState, useEffect } from 'react';
import { dropDownArray } from '../data/data';

const Dropdown = () => {
	const [colorselect, setcolorselect] = useState('');

	const DropDown = ({ label, array }) => {
    
		const colorOptions = array.map((item) => {
      console.log('item');
      console.log(item);
			return (
        <option 
        key={item.value} 
        value={item.value}
        defaultValue="none"
          //react wont use selected but value in select input
        //selected={colorselect === item.value}
        >
				{item.label}
				</option>
			);
		});

		return (
			<div className=' form wrapper dropdownWrap'>
				<label>{label}</label>
				<select
         value={colorselect}
					onChange={(e) => setcolorselect(e.target.value)}
					className='ui dropdown'
				>
					{colorOptions}
				</select>
				<div
					style={{ backgroundColor: colorselect, color: 'white' }}
					className='colors'
				>
					{colorselect !== '' ? `you choose ${colorselect}` : ''}
				</div>
			</div>
		);
	};

	return (
    <DropDown 
    label={' Pick your favorite color:'} 
    array={dropDownArray} 
    selection={colorselect}
    />
	);
};

export default Dropdown;
