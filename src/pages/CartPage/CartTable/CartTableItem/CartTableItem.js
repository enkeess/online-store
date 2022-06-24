
import {Flex, StyledIconButton} from "@BaseComponents";

import { Counter } from '@Components';

import {Typography} from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';


import src from '@/img/img_1.png';
import { colors} from '@Utils';

import { CartTableItemBase, CartTableItemName, CartTableItemPrice } from '../CartTableItemBase';

export const CartTableItem = (props) => {

	const name = 'Кружка PrioritY "Paw Patrol / Щенячий патруль"...';
	const code = 'Код товара: 2398643Р';
	const price = '2500 р.';
	const alt = 'alt';

	return(
		<CartTableItemBase>
			<CartTableItemName>
				<Flex align={'center'} justify={'center'}>
					<img src={src} alt={alt}/>
				</Flex>

				<Flex align={'flex-start'} dir={'column'} justify={'center'} rgap={'10px'}>
					<Typography variant='h3'>
						{name}
					</Typography>

					<Typography variant='p'>
						{code}
					</Typography>
				</Flex>
			</CartTableItemName>

			<Flex>
				<Counter/>
			</Flex>

			<CartTableItemPrice>
				<Typography variant='tablePrice' color={colors.footer}>
					{price}
				</Typography>
				
			</CartTableItemPrice>

			<Flex>
				<StyledIconButton variant={'contained'} color='infoLight'>
					<CloseIcon color='info'/>
				</StyledIconButton>
			</Flex>

		</CartTableItemBase>
	)
}