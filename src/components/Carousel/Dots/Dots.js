import styled from '@emotion/styled';
import { colors } from '@Utils'


const DotsBase = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;

	column-gap: 10px;

	padding: 55px 0;
`

const Dot = styled.li`
	background-color: ${props => props.isActive ? colors.info : colors.cardBg};
	height: 12px;
	width: 13px;
	border-radius: 50%;
	cursor: pointer;
`

export const Dots = (props) => {
	const {cur = 1, max = 1, setActivePage} = props

	const items = Array(max).fill('');

	const getDots = items.map((_, i) => 
		<Dot key={`dot_${i}`} isActive={i === cur - 1} onClick={() => setActivePage(i + 1)}/>
	)
	
	return(
		<DotsBase>
			{getDots}
		</DotsBase>
	);
};
