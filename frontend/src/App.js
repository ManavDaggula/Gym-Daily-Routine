import './App.css';
import Landing from './components/Landing';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './components/Login';
import Navbar from './components/Navbar';
function App() {
	return (
		<>
		<Router>
			<Navbar/>
			<Routes>
				<Route exact path='/' element={<Landing/>}/>
				<Route exact path='/login' element={<Login/>}/>
			</Routes>
		</Router>
		</>
	);
}

export default App;
