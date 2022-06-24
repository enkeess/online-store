import styled from "@emotion/styled";
import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import { colors } from '@Utils'
import { Typography } from '@mui/material';
import { Container, Flex, IconsBlock, Logo } from '@BaseComponents';
import { Contacts } from '@Components';


const links = [[
		"Конструктор подарка",
		"Вопрос - ответ",
		"Статьи"
	], [
		"Доставка",
		"Оплата",
		"О нас",
		"Бренды"
	], [
		"Гарантии и возврат",
		"Контакты",
		"Помощь"
]]


const FooterBase = styled.footer`
  background-color: ${colors.footer};
  height: 315px;
  padding: 45px 0 58px;
  color: ${colors.light};
`

const FooterContainer = styled(Container)`
	display: grid;
	grid-template-columns: 1fr 3fr 1fr;
	height: 100%;
	column-gap: 150px;
`

const FooterLinkContainer = styled.div`
  	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: flex-start;
	margin-top: 30px;
`

const FooterLinkBlock = styled.ul`
  	display: grid;
	grid-template-columns: 1fr;
	row-gap: 10px;
`


export const Footer = (props) => {

	const getLinks = useMemo(() => {
			return links.map((block) => {
				return(
					<FooterLinkBlock key={nanoid()}>
						{block.map(link => {
							return(
								<li key={nanoid()}>
									<Typography variant='footer'>
										{link}
									</Typography>
								</li>
							)
						})}
					</FooterLinkBlock>
				)
			})
		}, [])


    return(
        <FooterBase>
            <FooterContainer>
				<Flex
					align='flex-start'
					dir='column'
					justify='space-between'
				>
					<Logo variant='dark'/>
				</Flex>
					
				<FooterLinkContainer>
					{getLinks}
				</FooterLinkContainer>

				<Flex
					align='flex-start'
					dir='column'
					justify='space-between'
					mt='15px'
				>
					<IconsBlock color='light' textColor={colors.footer} iconColor='light'/>
					<Flex
						dir='column'
					>
						<Contacts dir='column' align='flex-start' rgap='15px'/>
					</Flex>
				</Flex>
			</FooterContainer>		
        </FooterBase>
    );
};