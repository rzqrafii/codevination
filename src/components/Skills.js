import React from "react";
import { Link } from "react-router-dom";
import IllustrationOne from "../images/illustration-1.svg";
import IllustrationTwo from "../images/illustration-2.svg";

const Skills = () => {
	return (
		<>
			<div className="bg-white">
				<div className="hero h-full mt-20 px-20 text grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-between items-center align-middle pt-10 gap-x-20">
					<div className="hero-img pb-10 lg:h-auto md:h-1/2 sm:h-1/3">
						<img src={IllustrationOne} alt="" />
					</div>
					<div className="skills flex-col mb-10">
						<h1 className="text-4xl mb-6 text-center xl:text-left lg:text-left text-gray-800 font-bold leading-snug">
							We build some <br /> <b> beautiful website</b>
						</h1>
						<div>
							<p className="leading-loose text-gray-400 mb-6 text-center xl:text-left lg:text-left">
								We provide what you need to enjoy your holiday with family. Time
								to make memorable moments.Your money can return but your time is
								not. What are you thinking?
							</p>
						</div>
						<div className="show-more mt-10 text-gray-400 font-medium text-xs flex justify-center md:justify-start">
							<a href="/">
								<span>See More Portofolio</span>
							</a>
						</div>
					</div>
				</div>
				<div className="hero h-full mt-10 px-20 text grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-between items-center align-middle pt-10 gap-x-20">
					<div className="skills flex-col mb-10">
						<h1 className="text-4xl mb-6 text-center xl:text-left lg:text-left text-gray-800 font-bold leading-snug">
							We build some <br /> <b> mobile friendly</b>
						</h1>
						<div>
							<p className="leading-loose text-gray-400 mb-6 text-center xl:text-left lg:text-left">
								We provide what you need to enjoy your holiday with family. Time
								to make memorable moments.Your money can return but your time is
								not. What are you thinking?
							</p>
						</div>
						{/* <div className="btn-skills flex justify-center">
							<Link
								className="flex justify-center items-center mr-2 w-48 p-4 text-white bg-yellow-400 rounded-lg text-1xl hover:shadow-xl hover:bg-yellow-500 font-semibold"
								to="/"
							>
								Pesan Sekarang
							</Link>
						</div> */}
						<div className="show-more mt-10 text-gray-400 font-medium text-xs flex justify-center md:justify-start">
							<a href="/">
								<span>See More Portofolio</span>
							</a>
						</div>
					</div>
					<div className="hero-img pb-10 lg:h-auto md:h-1/2 sm:h-1/3">
						<img src={IllustrationTwo} alt="" />
					</div>
				</div>
			</div>
			<div class="mr-8 ml-8 mt-20 w-auto"></div>
		</>
	);
};

export default Skills;
