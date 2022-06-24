import { useRef, useState } from 'react';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Dots } from './Dots';
import { StyledIconButton } from '@BaseComponents';
import styled from '@emotion/styled';


const CarouselBase = styled.div`
	width: 100%;
	position: relative;
	min-height: fit-content;
`

const Viewbox = styled.div`
	position: relative;
	overflow-x: hidden;
`

const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	left: 0;

	transition: all 0.3s ease-in-out;
	transform: translateX(${props =>  - props.width * (props.activePage - 1)}px)
`


const Page = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	minWidth: ${props => props.width}px;
`

const Left = styled.div`
	position: absolute;
	top: 50%;

	transform: translateY(-50%);
	left: -55px;
`

const Right = styled(Left)`
	left: auto;
	right: -55px;
`


export const Carousel = (props)  => {

	const {content = []} = props;
	const {inViewbox = 4} = props;

	const maxPage = Math.ceil(content.length / inViewbox);	

	const [activePage, setActivePage] = useState(1);
	
	const incActivePage = () => {
		if(activePage < maxPage) {
			setActivePage(activePage + 1);
		}
	}

	const decActivePage = () => {
		if(activePage > 1) {
			setActivePage(activePage - 1);
		}
	}

	const carouselRef = useRef(null);
	const width = carouselRef.current?.clientWidth;

	const getPages = () => {
		let pages = [];

		for(let i = 0; i < maxPage; i++) {
			pages.push(content.slice(i * inViewbox, (i + 1) * inViewbox));
		}

		return pages.map(i => <Page width={width}>{i}</Page>);
		
	}

	console.log(activePage);
	console.log(maxPage);

	return(
		<CarouselBase ref={carouselRef}>

			<Viewbox>
				<Content width={width} activePage={activePage}>
					{getPages()}
				</Content>
			</Viewbox>

			<Left>
				<StyledIconButton onClick={decActivePage}  color='info' variant='outlined' disabled={activePage <= 1}>
					<ArrowBackIosNewIcon/>
				</StyledIconButton>
			</Left>
			
			<Right>
				<StyledIconButton onClick={incActivePage} color='info' variant='outlined' disabled={activePage === maxPage}>
					<ArrowForwardIosIcon/>
				</StyledIconButton>
			</Right>

			<Dots max={maxPage} cur={activePage} setActivePage={setActivePage}/>
		</CarouselBase>
	);
};
