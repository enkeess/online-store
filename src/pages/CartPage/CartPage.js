import { withLayout } from '@Hoc';
import {Container, Section, SectionTitle, Flex, StyledIconButton, UnderlidedTypography, StyledButton} from "@BaseComponents";
import styled from "@emotion/styled";
import {Button, Typography} from "@mui/material";

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { colors, routes } from '@Utils';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { CartTable } from './CartTable';


const CartPage = () => {
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


export default withLayout(CartPage);