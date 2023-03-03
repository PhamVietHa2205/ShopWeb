import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DETAIL, HOME_PATH, LOG_IN, SIGN_UP,CHECKOUT } from './constants/path_local';
import { Home } from './pages/home'
import { LogIn } from './pages/log_in';
import { SignUp } from './pages/sign_up';
import './languages';
import Detail from './pages/detail';
import Checkout from './pages/checkout';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={HOME_PATH} element={<Home/>}></Route>
				<Route path={LOG_IN} element={<LogIn/>}></Route>
				<Route path={SIGN_UP} element={<SignUp/>}></Route>
				<Route path={DETAIL} element={<Detail/>}></Route>
				<Route path={CHECKOUT} element={<Checkout/>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
