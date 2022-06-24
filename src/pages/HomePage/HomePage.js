import { Card }  from '@Components';

import { Container, Section, SectionTitle } from '@BaseComponents';
import { Carousel } from '@Components';
import { withLayout } from '@/hoc';

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

const HomePage = () => {
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

export default withLayout(HomePage);