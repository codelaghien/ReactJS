import React from 'react';

class Xe extends React.Component {
	constructor(props) {
		console.log('Xe constructor: ', props);
		super(props);
		this.state = {
			color: props.color,
			value: props.value,
		};
		console.log('this', this);
		// this.shoot = this.shoot.bind(this);
	}

	// static getDerivedStateFromProps(props, state) {
	// 	console.log('getDerivedStateFromProps', props);
	// 	return { color: props.color };
	// }

	shoot() {
		console.log('shoot this = ', this);
		// alert('Great Shot!');
	}

	shoot2(b) {
		console.log('shoot 2 this = ', this);
		console.log('shoot b = ', b);
		// alert('Great Shot!');
	}

	shoot3 = (a) => {
		// console.log('shoot2 this = ', this);
		console.log('shoot 3 a = ', a);
	};

	render() {
		console.log('render');
		// console.log('Xe class: ', this.props.color);
		// this.setState({ color: this.props.color, value: this.props.value });
		const shoot = (
			<h3
				onClick={this.shoot}
				style={{ color: this.state.color, cursor: 'pointer' }}
			>
				Hi, {this.state.value}!
			</h3>
		);
		const shoot2 = (
			<h3
				onClick={this.shoot2.bind(this, 'Goal A')}
				style={{ color: this.state.color, cursor: 'pointer' }}
			>
				Hi, {this.state.value}!
			</h3>
		);
		const shoot3 = (
			<h3
				onClick={() => this.shoot3('Goal')}
				style={{ color: this.state.color, cursor: 'pointer' }}
			>
				Hi, {this.state.value}!
			</h3>
		);
		return shoot;
	}

	// componentDidMount() {
	// 	console.log('componentDidMount');
	// 	setTimeout(() => {
	// 		this.setState({ color: 'yellow' });
	// 		console.log('componentDidMount đã thay đổi thành màu vàng');
	// 	}, 3000);
	// }
}

export default Xe;
