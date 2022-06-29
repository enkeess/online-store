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
	padding-top: 15px;	
`

const InputSlider = ({name, data: {label, value}, defaultValue, control}) => {
  return (

	<Controller
		name={`${name}.${value}`}
		control={control}
		render={({ field }) => (
			<TextField
				label={label}
				defaultValue={defaultValue[value]}
				size="small"
				color='info'
				onChange={(e) => field.onChange(e.target.value)} 
			/>
		)}
	/>						
  );
}

export const InputSliderBlock = ({control, params, name, defaultValue}) => {
	return(
		<InputSliderContainer>
			{params.map((data, i) => (
				<InputSlider control={control} name={name} data={data} defaultValue={defaultValue}/>
			))}
		</InputSliderContainer>
	)
}