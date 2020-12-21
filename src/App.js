import React from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import './firebase';
import { auth } from './firebase';
import SignIn from './components/SignIn/SignIn';
import SignOut from "./components/SignOut/SignOut";

function App() {
	const [user] = useAuthState(auth);

	return (
		<div className="App">
			{user ? <SignOut /> : <SignIn /> }
		</div>
	);
}

export default App;
