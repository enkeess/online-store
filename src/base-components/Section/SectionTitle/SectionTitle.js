import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const SectionTitleBase = styled.div`
	padding: 20px;
`

export const SectionTitle = (props) => {
	return(
		<SectionTitleBase>
			<Typography component='h2' variant='h2' {...props}/>
		</SectionTitleBase>
	)
}

