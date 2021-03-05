import logo from './logo.svg';
import './App.css';
// import Car from './Car';
import Xe from './Xe';
import MyForm from './MyForm';

function App() {
	const html = (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
				<Xe color='red' value='Tôi là xe đỏ' />
				<MyForm />
			</header>
		</div>
	);
	return html;
}

export default App;
