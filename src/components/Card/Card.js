
import styled from '@emotion/styled';

import src from '@/img/img_1.png';

import { Checkbox, Avatar, Rating, Typography } from "@mui/material";

import { StyledButton } from '@BaseComponents';


import { colors } from '@Utils'

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import StarIcon from '@mui/icons-material/Star';


const CardBase = styled.div`
	height: 550px;
	width: 350px;
	
	border-radius: 36px;
	padding: 22px 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	
	position: relative;
	transition: all 0.3s;

	&:hover {
		background-color: ${colors.cardBg};
	}

	.icon {
		height: 50px;
		width: 50px;
	}

	.iconRight, .iconLeft {
		position: absolute;
		top: 22px;
		right: 40px;
	}

	.iconLeft {
		right: auto;
		left: 22px;
	}

	.bg-none {
		background: none
	}

`

const ImgContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 230px;
	margin-top: 20px;
`

const Block = styled.div`
	width: 100%;
	display: grid;
	grid-template-rows: 35px 35px;
	grid-template-columns: 3fr 2fr;
	align-items: center;
	justify-content: center;
	margin: 20px 0;
`

const OldPrice = styled.span`
	height: 19px;
	font-size: 16px;
	line-height: 19px;
	position: relative;

	color: #848484;

	margin: 0 auto;

	&::before {
		position: absolute;
		content: "";
		left: 2px;
		top: 50%;
		right: 10px;

		border-top: 1px solid;
		border-color: #848484;

		transform: rotate(-23.63deg);
	}
`

const Price = styled.span`
	font-weight: 700;
	font-size: 23px;
	line-height: 27px;

	color: ${colors.textDark};
`

export const Card = (props) => {
	return(
		<CardBase>
			<Checkbox 
				sx={{backgroundColor: colors.buttonBg}}
				color='info'
				className='iconRight icon'
				checkedIcon={<FavoriteIcon color='error'/>}
				icon={<FavoriteBorderIcon color='info'/>}
			/>

			
			<Avatar className='iconLeft icon bg-none'>
				<LocalFireDepartmentIcon color='primary'/>
			</Avatar>

			<ImgContainer>
				<img src={src} alt={'alt'}/>
			</ImgContainer>

			<Typography variant='h3' align='left'>
				Кружка PrioritY "Гравити 
				
				Фолз, Disney / Дисней...
			</Typography>
			

			<Block>
				<Typography variant='p' sx={{justifySelf: 'flex-start'}}>
					В наличии: 15 шт
				</Typography>

				<OldPrice>
					4500 p.
				</OldPrice>

				<Rating 
					size='large'
					value={2} 
					readOnly
					icon={<StarIcon color='primary' />}
					emptyIcon={<StarIcon sx={{color: ' rgba(255, 169, 39, 0.4)'}}/>}
				/>

				<Price>
					2500 р.
				</Price>

			</Block>

			<StyledButton variant='contained' color='success' fullWidth>
				<Typography color={colors.light} variant='btn'>
					Добавить в корзину
				</Typography>
			</StyledButton>
		</CardBase>
	)
}