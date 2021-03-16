import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Skills from "../components/Skills";
import Getintouch from "../components/Getintouch";
import Clients from "../components/Clients";

//move everything from app.js

const Home = () => {
	return (
		<>
			{/* content dibawah navbar dan diatas footer */}
			<Hero />
			<Content />
			<Skills />
			<Getintouch />
			<Clients />
		</>
	);
};

export default Home;
