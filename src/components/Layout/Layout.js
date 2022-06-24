import styled from '@emotion/styled';
import { Footer } from './Footer';
import { Header } from './Header';

const LayoutBase = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-rows: 150px 1fr 315px;
`

export const Layout = ({children}) => {
	return(
		<LayoutBase>
			<Header/>
				<div className={'main'}>
					{children}
				</div>
			<Footer/>
		</LayoutBase>
	)
}