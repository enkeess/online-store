import styled from '@emotion/styled';
import {  Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { colors } from '@Utils'

import { Container, Flex, UnderlidedTypography, Section, SectionTitle } from '@BaseComponents'
import { withLayout } from '@Hoc';

import { LoginForm } from './LoginForm';

const LoginPageContainer = styled(Container)`
	margin: 0 auto;
	width: 615px;

	padding: 90px 0 120px;
`

const LoginPage = () => {
	return(
		<LoginPageContainer>
			<Section>
				<SectionTitle align='center'>
					Вход
				</SectionTitle>

				<LoginForm/>
				
				<Flex mt='35px' dir='column' rgap='20px'>		
					<Link to='/registration'>		
						<UnderlidedTypography color={colors.success} align='center' variant='other'>
							Или зарегистрироваться
						</UnderlidedTypography>
					</Link>	
			
					<Link to='/recovery'>
						<Typography color={colors.textGray} variant='other'>
							Забыли пароль?
						</Typography>
					</Link>
				</Flex>			
			</Section>
		</LoginPageContainer>
	)
}

export default withLayout(LoginPage);