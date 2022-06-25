
import {Container, Section, SectionTitle, Flex,  UnderlidedTypography, StyledButton} from "@BaseComponents";

import {Typography} from "@mui/material";

import { colors, routes } from '@Utils';
import { Link } from 'react-router-dom';
import { CartTable } from './CartTable';

export const CartPage = () => {
	return(
		<Container>
			<Section>
				<SectionTitle>
					Корзина
				</SectionTitle>

				<CartTable/>
					
				<Flex align='flex-end' justify='center' dir='column' >
					<Flex cgap='40px' justify='flex-end' mt='60px'>
						<Typography variant='tableTitle' color={colors.textGray}>
							Окончательная стоимость:
						</Typography>

						<Typography color='error' variant='totalPrice'>
							5000 p.
						</Typography>
					</Flex>

					<Flex cgap='40px' justify='flex-end' mt='40px'>
						<Link to={routes.HOME}>
							<UnderlidedTypography color={colors.success}>
								Продолжить покупки
							</UnderlidedTypography>
						</Link>
						
						<StyledButton color='info' variant='contained'>
							<Typography variant='btn'>
								Перейти к оформлению
							</Typography>
						</StyledButton>
					</Flex>

				</Flex>
			</Section>
		</Container>
	)
};
