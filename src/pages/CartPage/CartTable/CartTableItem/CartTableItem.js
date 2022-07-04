
import {Flex, StyledIconButton} from "@BaseComponents";
import { Counter } from '@Components';
import {Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { colors} from '@Utils';

import { CartTableItemBase, CartTableItemName, CartTableItemPrice } from '../CartTableItemBase';

import { removeItem } from '@/redux/cart/slice';
import { useDispatch } from 'react-redux';

export const CartTableItem = ({label, price, count, id, src, alt}) => {
	const dispatch = useDispatch();
	const removeFromCart = () => dispatch(removeItem(id));
	
	return(
		<CartTableItemBase>
			<CartTableItemName>
				<Flex align={'center'} justify={'center'}>
					<img src={src} alt={alt}/>
				</Flex>

				<Flex align={'flex-start'} dir={'column'} justify={'center'} rgap={'10px'}>
					<Typography variant='h3'>
						{label}
					</Typography>

					<Typography variant='p'>
						Код товара: {id}
					</Typography>
				</Flex>
			</CartTableItemName>

			<Flex>
				<Counter id={id}/>
			</Flex>

			<CartTableItemPrice>
				<Typography variant='tablePrice' color={colors.footer}>
					{price * count} p.
				</Typography>
				
			</CartTableItemPrice>

			<Flex>
				<StyledIconButton variant={'contained'} color='infoLight' onClick={removeFromCart}>
					<CloseIcon color='info'/>
				</StyledIconButton>
			</Flex>

		</CartTableItemBase>
	)
}