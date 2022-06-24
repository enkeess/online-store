import styled from '@emotion/styled';
import {Flex} from '@BaseComponents';

export const CartTableItemBase = styled.li`
	display: grid;
	grid-template-columns: [name] 6fr  [count] 2fr  [space] 1fr [price] 2fr [action] 1fr;
	border-bottom: solid 1px #F3F3F3;
	padding: 14px 0;
`

export const CartTableItemName = styled.div`
	display: grid;
	grid-column: name;
	grid-template-columns: 2fr 4fr;
	align-items: center;
`

export const CartTableItemPrice = styled(Flex)`
	grid-column: price;	
`