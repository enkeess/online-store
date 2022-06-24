
import { Flex } from '@BaseComponents';
import { Typography } from '@mui/material';
import { colors } from '@Utils';

import { CartTableItemBase, CartTableItemName, CartTableItemPrice } from '../CartTableItemBase';

export const CartTableHead = () => {
	return(
		<CartTableItemBase>
			<CartTableItemName>
				<Typography variant='tableTitle' color={colors.textGray}>
					Название товара
				</Typography>
			</CartTableItemName>

			<Flex>
				<Typography variant='tableTitle' color={colors.textGray}>
					Количество
				</Typography>
			</Flex>

			<CartTableItemPrice>
				<Typography variant='tableTitle' color={colors.textGray}>
					Цена
				</Typography>
			</CartTableItemPrice>
		</CartTableItemBase>
	)
}

