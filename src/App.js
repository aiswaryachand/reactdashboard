import './App.css';
import Dashboard from './components/dashboard.jsx';
import Sidebar from './components/sidebar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Sidebar />
				<Routes>
					<Route path='*' element={<Navigate to={'/dashboard'} />} />
					<Route path='/dashboard' element={<Dashboard />} />
					{/* futher route in development */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;