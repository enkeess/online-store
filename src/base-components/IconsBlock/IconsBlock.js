import { Link } from 'react-router-dom';
import { Badge} from '@mui/material';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';

import styled from '@emotion/styled';
import { useSelector } from 'react-redux';


const IconsBlockBase = styled.ul`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	column-gap: 20px;
`

const IconsBlockItem = styled.li`
	svg {
		height: 27.5px;
		width: auto;
	}
`


export const IconsBlock = ({color = "primary", textColor = 'white', iconColor = 'dark'}) => {
	const cartCount = useSelector(state => state.cart.totalCount);
	return(
		<IconsBlockBase>
			{/* Profile */}
			<IconsBlockItem>
				<Link to={'/profile'}>
					<Badge badgeContent={2} color={color} sx={{color: textColor}}>
						<PersonOutlineOutlinedIcon color={iconColor}/>
					</Badge>
				</Link>
			</IconsBlockItem>

			{/* Favour */}
			<IconsBlockItem>
				<Link to={'/favour'}>
					<Badge badgeContent={2} color={color} sx={{color: textColor}}>
						<StarBorderPurple500OutlinedIcon color={iconColor}/>
					</Badge>
				</Link>
			</IconsBlockItem>

			{/* Cart */}

			<IconsBlockItem>
				<Link to={'/cart'}>
					<Badge badgeContent={cartCount} color={color} sx={{color: textColor}}>
						<ShoppingCartOutlinedIcon color={iconColor}/>
					</Badge>
				</Link>
			</IconsBlockItem>

			{/* Liked */}

			<IconsBlockItem>
				<Link to={'/liked'}>
					<Badge badgeContent={2} color={color} sx={{color: textColor}}>
						<FavoriteBorderOutlinedIcon color={iconColor}/>
					</Badge>
				</Link>
			</IconsBlockItem>
		</IconsBlockBase>
	);
};


