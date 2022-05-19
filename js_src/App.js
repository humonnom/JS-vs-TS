export default function App({ $target }) {
	this.state = {

	}

	this.setState = (nextState) => {
		this.state = {
			...this.state,
			...nextState,
		}
	}

	
}