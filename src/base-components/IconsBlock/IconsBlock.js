import { Link } from 'react-router-dom';
import { Badge} from '@mui/material';
import { nanoid } from 'nanoid';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import styled from '@emotion/styled';
import { useMemo, useState } from 'react';

const iconsData = [ {
		to: '/profile',
		Icon: PersonOutlineOutlinedIcon
	}, {
		to: '/favour',
		Icon: StarBorderPurple500OutlinedIcon 
	}, {
		to: '/cart',
		Icon: ShoppingCartOutlinedIcon
	}, {
		to: '/liked',
		Icon: FavoriteBorderOutlinedIcon
	}
]

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
	const [value, setValue] = useState([2,2,2,2]);
	const icons = useMemo(() => 
		iconsData.map(({to, Icon}, i) => 

			<IconsBlockItem key={nanoid()}>
				<Link to={to}>
					<Badge badgeContent={value[i]} color={color} sx={{color: textColor}}>
						<Icon color={iconColor}/>
					</Badge>
				</Link>
			</IconsBlockItem>
		)
	, [value])

	return(
		<IconsBlockBase>
			{icons}
		</IconsBlockBase>
	);
};


