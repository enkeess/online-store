import styled from '@emotion/styled';

import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

import { Typography } from '@mui/material';
import { Flex } from '@BaseComponents';

const ContactItem = styled.li`

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
`

export const Contacts = (props) => {
	return(
		<Flex
			{...props}
		>
			<a href='tel: 78009998877'>
				<ContactItem>
					<PhoneIcon/>
					<Typography variant='navbar'>	
						+7(800)-999-88-77
					</Typography>
				</ContactItem>
			</a>

			<a href='email: test@test.com'>
				<ContactItem>
					<MailIcon/>
					<Typography variant='navbar'>	
						test@test.com
					</Typography>
				</ContactItem>
			</a>
		</Flex>
	);
};