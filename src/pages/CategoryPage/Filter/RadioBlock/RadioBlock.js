import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { Controller } from 'react-hook-form'

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import styled from '@emotion/styled';
import {Flex} from '@BaseComponents';


const StyledRadio = ({data: {label, value, id}}) => {
	return(
		<FormControlLabel
			sx={{
				fontWeight: 400,
				fontSize: '20px',
				lineHeight: '23px',
				color: '#818181',
				height: '28px'
			}}
			value={value} 
			control={
				<Radio
					checkedIcon={<CheckBoxIcon color='info'/>}
					icon={<CheckBoxOutlineBlankIcon color='info'/>}
				/>
			} 
			label={label} 
		/>
	)
}

export const RadioBlock = ({control, params, name, defaultValue}) => {
	return(
		<div className='radio'>
			<Controller
				render={({ field }) => (
					<RadioGroup aria-label="name" {...field}>
						{params.map(data => <StyledRadio data={data} key={data.id}/>)}
					</RadioGroup>
				)}
				name={name}
				control={control}
			/>
		</div>
	)
}