import styled from '@emotion/styled';

import { Link } from 'react-router-dom';
import { colors } from '@Utils'

import { Container, Flex, UnderlidedTypography, Section, SectionTitle } from '@BaseComponents'
import { withLayout } from '@Hoc';

import { RegistrationForm } from './RegistrationForm';
// import { LoginForm } from './LoginForm';

const RegistrationPageContainer = styled(Container)`
	margin: 0 auto;
	width: 615px;

	padding: 90px 0 120px;
`

const RegistrationPage = () => {
	return(
		<RegistrationPageContainer>
			<Section>
				<SectionTitle align='center'>
					Регистрация
				</SectionTitle>

				<RegistrationForm/>
				
				<Flex mt='35px' dir='column' rgap='20px'>		
					<Link to='/login'>		
						<UnderlidedTypography color={colors.success} align='center' variant='other'>
							Или выполнить вход
						</UnderlidedTypography>
					</Link>	
			
					{/* <Link to='/recovery'>
						<Typography color={colors.textGray} variant='other'>
							Забыли пароль?
						</Typography>
					</Link> */}
				</Flex>			
			</Section>
		</RegistrationPageContainer>
	)
}

export default withLayout(RegistrationPage);