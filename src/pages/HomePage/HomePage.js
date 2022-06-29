import { Card }  from '@Components';

import { ApiService } from '@/services/apiService';

import { Container, Section, SectionTitle } from '@BaseComponents';
import { Carousel } from '@Components';
import { nanoid } from 'nanoid';
import { useEffect, useState, useMemo } from 'react';

let content = [];

for(let i = 0; i < 25; i++) {
	content.push(<Card key={nanoid()}/>);
}

// const apiService = new ApiService();


export const HomePage = () => {
	
	const [data, setData] = useState([])

	useEffect(() => {
		ApiService.getCards()
			.then(res => setData(res))
	}, [])
	
	const cards = useMemo(() => {
		return data.map(item => {
			console.log(item);
			return <Card data={item} key={item.id}/>
		})
	}, [data])

	return(
		<Container>
			<Section>
				<SectionTitle>
					Популярные товары
				</SectionTitle>

				<Carousel content={cards}/>
	
			</Section>


		</Container>
	)
}

