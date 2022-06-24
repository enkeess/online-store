import {Flex} from "@BaseComponents";
import styled from "@emotion/styled";
import {Button, Typography} from "@mui/material";

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { colors } from '@Utils';
import { useState } from 'react';



const CounterIconButton = styled(Button)`
	height: 30px;
	width: 30px;
	min-width: 30px;
	border-radius: 200px;
	padding: 0;
	margin: 0;
`


export const Counter = () => {
	const [count, setCount] = useState(1);
	const changeCount = (value) => {
		setCount(prev => prev + value);
	}

	return(
		<Flex cgap='20px'>
			<CounterIconButton 
				onClick={() => changeCount(-1)}
				variant='outlined'
			>
				<RemoveIcon/>
			</CounterIconButton>

			<Typography variant='counter' color={colors.textDark}>
				{count}
			</Typography>
			

			<CounterIconButton 
				onClick={() => changeCount(1)} 
				variant='outlined'
			>
				<AddIcon/>
			</CounterIconButton>

		</Flex>
	)
}