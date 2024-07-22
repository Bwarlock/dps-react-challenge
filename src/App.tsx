import dpsLogo from './assets/DPS.svg';
import './App.css';
import UserTable from './components/UserTable';

function App() {
	return (
		<>
			<div>
				<a href="https://www.digitalproductschool.io/" target="_blank">
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
			</div>
			<div className="home-card">
				<UserTable />
			</div>
		</>
	);
}

export default App;
