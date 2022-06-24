import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const UnderlidedTypography = styled(Typography)` 
	color: ${props => props.color};
	border-bottom: solid 1px ${props => props.color};
	margin-bottom: 5px;
`

 