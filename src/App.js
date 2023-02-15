import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HOME_PATH, LOG_IN, SIGN_UP } from './constants/path_local';
import { Home } from './pages/home'
import { LogIn } from './pages/log_in';
import { SignUp } from './pages/sign_up';
import './languages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={HOME_PATH} element={<Home/>}></Route>
				<Route path={LOG_IN} element={<LogIn/>}></Route>
				<Route path={SIGN_UP} element={<SignUp/>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
