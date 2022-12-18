
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Landing from './components/Landing';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import './App.css';
import Profile from './components/Profile';
function App() {
	return (
		<>
		<Router>
			<Navbar/>
			<Routes>
				<Route exact path='/' element={<Landing/>}/>
				{/* <Route exact path='/about' element={<About/>}/> */}
				<Route exact path='/login' element={<Login/>}/>
				<Route exact path='/signup' element={<Signup/>}/>
				<Route exact path='/profile' element={<Profile/>}/>
			</Routes>
		</Router>
		</>
	);
}

export default App;
