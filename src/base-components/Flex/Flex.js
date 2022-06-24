import styled from '@emotion/styled';

export const Flex = styled.div`
  	display: flex;
	align-items: ${props => props.align ?? 'center'};
	justify-content: ${props => props.justify ?? 'center'};
	flex-direction: ${props => props.dir ?? 'row'};;
	gap: ${props => props.gap ?? '0'};
	column-gap: ${props => props.cgap ?? '0'};
	row-gap: ${props => props.rgap ?? '0'};
	margin-top: ${props => props.mt ?? '0'};
`