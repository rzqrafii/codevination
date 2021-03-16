import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages";
import About from "./pages/about";
import Services from "./pages/services";
import Dropdown from "./components/Dropdown";
import { Switch, Route } from "react-router-dom";
function App() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	useEffect(() => {
		const hideMenu = () => {
			if (window.innerWidth > 768 && isOpen) {
				setIsOpen(false);
				console.log("i resized");
			}
		};

		window.addEventListener("resize", hideMenu);

		return () => {
			window.removeEventListener("resize", hideMenu);
		};
	});
	return (
		<>
			{/* route => page , navbar dan footer akan selalu ada disetiap page dan ini akan menjadi sebuah component yang reusable */}
			<Navbar toggle={toggle} />
			<Dropdown isOpen={isOpen} toggle={toggle} />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/services" component={Services} />
				<Route path="/about" component={About} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
