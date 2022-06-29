import styled from '@emotion/styled';

import { Checkbox, FormControlLabel } from '@mui/material';
import { Controller } from 'react-hook-form';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const CheckboxContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`

const StyledCheckbox = ({control, name, data: {label, value, id}}) => {
	return(
		<Controller
			name={`${name}.${value}`}
			control={control}
			render={({ field }) => (
				<FormControlLabel
					{...field}
					control={
						<Checkbox 
							checked={field.value ?? false} 
							onChange={(e) => field.onChange(e.target.checked)} 
							checkedIcon={<CheckBoxIcon color='info'/>}
							icon={<CheckBoxOutlineBlankIcon color='info'/>}
						/>
					}
					label={label}
					sx={{
						fontWeight: 400,
						fontSize: '20px',
						lineHeight: '23px',
						color: '#818181',
						height: '28px'
					}}
				/>
			)}
		/>
	);
};

export const CheckboxBlock = ({control, params, name, defaultValue}) => {
	return(

		<CheckboxContainer>
			{params.map(data => (
				<StyledCheckbox control={control} name={name} data={data} key={data.id}/>
			))}
		</CheckboxContainer>
	)
}