import {Flex} from "@BaseComponents";
import styled from "@emotion/styled";
import {Button, Typography} from "@mui/material";

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { colors } from '@Utils';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { incItem, decItem } from '@/redux/cart/slice';

const CounterIconButton = styled(Button)`
	height: 30px;
	width: 30px;
	min-width: 30px;
	border-radius: 200px;
	padding: 0;
	margin: 0;
`


export const Counter = ({id}) => {

	const dispatch = useDispatch();

	const card = useSelector(state => state.cart.items.find((obj) => obj.id === id))

	const incToCart = () => dispatch(incItem(card));
	const decFromCart = () => dispatch(decItem(card.id));

	return(
		<Flex cgap='20px'>
			<CounterIconButton 
				onClick={decFromCart}
				variant='outlined'
			>
				<RemoveIcon/>
			</CounterIconButton>

			<Typography variant='counter' color={colors.textDark}>
				{card.count}
			</Typography>
			

			<CounterIconButton 
				onClick={incToCart} 
				variant='outlined'
			>
				<AddIcon/>
			</CounterIconButton>

		</Flex>
	)
}