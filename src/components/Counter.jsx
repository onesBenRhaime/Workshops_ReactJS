import { Component } from "react";

class Counter extends Component {
	constructor(props) {
		super(props);
		//console.log(this.props);
		console.log("I m the constructor");
	}
	static getDerivedStateFromProps(props, state) {
		console.log("I m rendering props");
		return null;
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.count > 3 ? false : true;
	}
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log(prevProps);
		console.log(prevState);
		return null;
	}
	componentDidUpdate() {
		console.log("I m updated");
	}

	componentDidMount() {
		console.log("I m mounting ....");
	}
	state = {
		count: 0,
		product: { id: 1, title: "product1" },
		name: this.props.PropName,
	};
	increment = () => {
		this.setState({ count: this.state.count + 1 });
		this.setState({
			// ... pour garder l'object et update just fi attr 1  spread operater
			product: { ...this.state.product, id: this.state.product.id + 1 },
		});
		console.log(this.state);
	};
	decrement = () => {
		this.setState({ count: this.state.count - 1 });
	};
	render() {
		return (
			<>
				{console.log("I  m rendering .....")}
				{/* <h1>{this.state.name}</h1> */}
				<h1>{this.state.count}</h1>
				<button onClick={this.increment}>Increment</button>
				<button onClick={this.decrement} disabled={this.state.count == 0}>
					Decrement
				</button>
				{[...Array(this.state.count)].map((item, index) => {
					return <Cell key={index} count={index} />;
				})}
			</>
		);
	}
}
export default Counter;

class Cell extends Component {
	constructor(props) {
		super(props);
	}
	componentWillUnmount() {
		console.log("I m unmounting");
	}

	render() {
		return <h1>{this.props.count}</h1>;
	}
}
