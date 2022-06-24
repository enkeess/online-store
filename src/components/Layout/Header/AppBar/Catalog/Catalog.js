import { colors } from '@Utils';
import {  Typography } from '@mui/material';
import { StyledButton } from '@BaseComponents';
import GridViewIcon from '@mui/icons-material/GridView';


export const Catalog = () => {
	return(
		<StyledButton color='primary' variant='contained'>
			<GridViewIcon sx={{fill: colors.light}}/>
			<Typography variant='btn'>
				Каталог
			</Typography>
		</StyledButton>
			
	)
}
