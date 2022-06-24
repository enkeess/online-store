import { Layout } from '@Components';


export const withLayout = (Wrapped) => {
	return  function(props) {
		return(
			<Layout>
				<Wrapped {...props}/>
			</Layout>
		);
	}
};


