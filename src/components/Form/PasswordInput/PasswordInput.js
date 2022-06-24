import styled from '@emotion/styled';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';


const FormInputIcon = styled(Button)`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 10px;
	width: 50px;
`

export const PasswordInput = (props) => {
	const [showPassword, setShowPassword] = useState(false);
	const toggleShowPassword = () => setShowPassword(prev => !prev);

	return(
		<TextField 
			{...props}

			type={showPassword ? 'text' : 'password'}
			InputProps={{ endAdornment: (
				<InputAdornment position="start">
					<FormInputIcon onClick={toggleShowPassword} color='placeholder'>
						{showPassword ? <Visibility/> : <VisibilityOff/>}
					</FormInputIcon>
				</InputAdornment>
			),}}
		/>
	)
}