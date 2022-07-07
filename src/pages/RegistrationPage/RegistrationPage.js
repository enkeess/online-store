import styled from '@emotion/styled';

import { Link } from 'react-router-dom';
import { colors } from '@Utils'

import { Container, Flex, UnderlidedTypography, Section, SectionTitle } from '@BaseComponents'
import { RegistrationForm } from './RegistrationForm';




const RegistrationPageContainer = styled(Container)`
	margin: 0 auto;
	width: 615px;
	padding: 90px 0 120px;
`

export const RegistrationPage = () => {
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
				</Flex>			
			</Section>
		</RegistrationPageContainer>
	)
}	
