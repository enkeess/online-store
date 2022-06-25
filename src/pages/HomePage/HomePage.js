import { Card }  from '@Components';

import { Container, Section, SectionTitle } from '@BaseComponents';
import { Carousel } from '@Components';

const content = [
	<Card/>,
	<Card/>,
	<Card/>,
	<Card/>,
	<Card/>,
	<Card/>,
	<Card/>,
	<Card/>
]

export const HomePage = () => {
	return(
		<Container>
			<Section>
				<SectionTitle>
					Популярные товары
				</SectionTitle>

				<Carousel content={content}/>
			</Section>

			{/* <Flex>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</Flex> */}
		</Container>
	)
}

