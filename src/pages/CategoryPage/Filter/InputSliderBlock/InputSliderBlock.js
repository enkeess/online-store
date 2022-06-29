import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Input, TextField } from '@mui/material';
import styled from '@emotion/styled';
import { Controller } from 'react-hook-form';

const InputSliderContainer = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(2, 1fr);
	position: relative;
	column-gap: 15px;
	padding-top: 0px;	
`

const InputSlider = ({name, data: {label, value, id}, defaultValue, control}) => {
  return (

	<Controller
		name={`${name}.${value}`}
		control={control}
		defaultValue={defaultValue[value]}
		render={({ field }) => (
			<TextField
				{...field}
				label={label}
				size="small"
				color='info'
				type='number'
				onChange={(e) => field.onChange(+e.target.value)} 
			/>
		)}
	/>						
  );
}

export const InputSliderBlock = ({control, params, name, defaultValue}) => {
	return(
		<InputSliderContainer>
			{params.map((data, i) => (
				<InputSlider control={control} name={name} data={data} defaultValue={defaultValue} key={data.id}/>
			))}
		</InputSliderContainer>
	)
}