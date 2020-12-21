import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Header.css';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import AddIcon from '@material-ui/icons/Add';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import DehazeRoundedIcon from '@material-ui/icons/DehazeRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SignOut from "../SignOut/SignOut";


//* Rendered App

function App() {
	return (
		<div className="Header">

			<div className="header__left">
				<div className="header__logo">
					<img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Logo" />
				</div>

				<div className="header__input">
					<SearchIcon />
					<input type="text" placeholder="Search" />
				</div>
			</div>

			<div className="header__middle">
				<div className="header__component active">
					<HomeIcon fontSize="large" />
				</div>

				<div className="header__component">
					<PeopleOutlineIcon fontSize="large" />
				</div>

				<div className="header__component">
					<SupervisedUserCircleRoundedIcon fontSize="large" />
				</div>

				<div className="header__component">
					<DehazeRoundedIcon fontSize="large" />
				</div>
			</div>

			<div className="header__right">

				<div className="header__info">
					<Avatar src="https://www.w3schools.com/howto/img_avatar.png" className="avatar" />
				</div>

				<Navbar>
					<NavItem icon={<AddIcon />} />
					<NavItem icon={<NotificationsActiveIcon />} />
					<NavItem icon={<MessengerIcon />} />

					<NavItem icon={<ArrowDropDownIcon />}>
						<DropdownMenu></DropdownMenu>
					</NavItem>
				</Navbar>
			</div>
		</div>
	);
}

//* All the header right styling and components

function Navbar(props) {
	return (
		<nav className="navbar">
			<ul className="navbar-nav">{props.children}</ul>
		</nav>
	);
}

function NavItem(props) {
	const [open, setOpen] = useState(false);

	return (
		<li className="nav-item">
			{/* eslint-disable-next-line */}
		<a href="#" className="icon-button" onClick={() => setOpen(!open)}>
			{props.icon}
		</a>

		{open && props.children}
		</li>
	);
}

function DropdownMenu() {
	const [activeMenu, setActiveMenu] = useState('main');
	const [menuHeight, setMenuHeight] = useState(null);
	const dropdownRef = useRef(null);

	useEffect(() => {
		setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
}, [])

function calcHeight(el) {
	const height = el.offsetHeight;
	setMenuHeight(height);
}

function DropdownItem(props) {
	return (
		// eslint-disable-next-line
		<a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
			<span className="icon-button">{props.leftIcon}</span>
			{props.children}
			<span className="icon-right">{props.rightIcon}</span>
		</a>
	);
}

return (
	<div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

			<CSSTransition
				in={activeMenu === 'main'}
				timeout={500}
				classNames="menu-primary"
				unmountOnExit
				onEnter={calcHeight}>
				<div className="menu">
				<DropdownItem>My Profile</DropdownItem>
				<DropdownItem
					leftIcon={<CogIcon />}
					rightIcon={<ChevronIcon />}
					goToMenu="settings">
					Settings
				</DropdownItem>
				<DropdownItem
					leftIcon="🦧"
					rightIcon={<ChevronIcon />}
					goToMenu="animals"
				>
					Animals
				</DropdownItem>

				<DropdownItem 
					leftIcon={<ExitToAppIcon />}
					onClick={<SignOut />}
				>
					<SignOut />
				</DropdownItem>

				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === 'settings'}
				timeout={500}
				classNames="menu-secondary"
				unmountOnExit
				onEnter={calcHeight}>
				<div className="menu">
				<DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
					<h2>My Tutorial</h2>
					</DropdownItem>
					<DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
					<DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
					<DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
					<DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === 'animals'}
				timeout={500}
				classNames="menu-secondary"
				unmountOnExit
				onEnter={calcHeight}>
				<div className="menu">
					<DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
						<h2>Animals</h2>
					</DropdownItem>
					<DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
					<DropdownItem leftIcon="🐸">Frog</DropdownItem>
					<DropdownItem leftIcon="🐱">Cat</DropdownItem>
					<DropdownItem leftIcon="🐶">Dog</DropdownItem>
				</div>
			</CSSTransition>
		</div>
	);
}

export default App;
