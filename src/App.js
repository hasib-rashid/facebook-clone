import React from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import './firebase';
import { auth } from './firebase';
import { firestore } from "./firebase";
import SignIn from './SignIn';

function App() {
	const [user] = useAuthState(auth);

	return (
		<div className="App">
			{user ? <h1>Chat Room</h1> : <SignIn /> }
		</div>
	);
}

export default App;
