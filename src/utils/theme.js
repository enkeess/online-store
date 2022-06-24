import { createTheme } from '@mui/material/styles';

import { colors } from './colors';


export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    success: {
      main: colors.success
    },
	info: {
		main: colors.info
	}, 

	error: {
		main: colors.error
	},

	light: {
		main: colors.light
	},

	dark: {
		main: colors.dark
	}, 

	placeholder: {
		main: colors.placeholder,
	}
  },

  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),

	h2 : {
		fontWeight: 500,
		fontSize: '40px',
		lineHeight: '47px', 
		color: colors.textDark
	},

	h3 : {
		fontWeight: 700,
		fontSize: '19px',
		lineHeight: '22px',
		color: colors.textDark
	},

	btn: {
		fontWeight: 700,
		fontSize: '18px',
		lineHeight: '21px', 
		textTransform: 'none', 
		color: 'white'
	},

	p : {
		fontWeight: 400,
		fontSize: '16px',
		lineHeight: '19px',
		color: colors.textGray
	},

	other: {
		fontWeight: 700,
		fontSize: '18px',
		lineHeight: '21px', 
	},

	navbar: {
		fontWeight: 400,
		fontSize: '16px',
		lineHeight: '19px'
	}, 

	menu : {
		fontWeight: 400,
		fontSize: '19px',
		lineHeight: '22px',
	},

	footer : {
		fontWeight: 400,
		fontSize: '16px',
		lineHeight: '19px'
	}
  },
});


		// color: colors.textNavbar