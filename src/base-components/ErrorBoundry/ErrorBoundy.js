import { Component } from 'react';
import { ErrorIndicator } from '../ErrorIndicator';

export class ErrorBoundry extends Component{

	state = {
		hasError: false
	}

	componentDidCatch = () => {
		console.log('something wrong');
		this.setState({hasError: true})
	}

	render = () => {
		if(this.state.hasError) {
			return <ErrorIndicator/>
		} else {
			return this.props.children;
		}
	}
}
