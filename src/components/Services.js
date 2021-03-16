import React from "react";
import VectorOne from "../images/vector-service-seo.svg";
import VectorTwo from "../images/vector-service-webdesign.svg";
import VectorThree from "../images/vector-service-logo.svg";

const Services = () => {
	return (
		<>
			<div className="bg-white">
				<div className="hero h-full mt-20 px-20 text grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-between items-center align-middle pt-10 gap-x-20">
					<div className="hero-img pb-10 lg:h-auto md:h-1/2 sm:h-1/3">
						<img src={VectorOne} alt="search-engine-optimization" />
					</div>
					<div className="skills flex-col mb-10">
						<h5 className="text-center mb-2 uppercase xl:text-left lg:text-left text-gray-300 tracking-widest">
							Search Engine Optimization
						</h5>
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
						<h5 className="text-center mb-2 uppercase xl:text-left lg:text-left text-gray-300 tracking-widest">
							Website Design
						</h5>
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
						<div className="show-more mt-10 text-gray-400 font-medium text-xs flex justify-center md:justify-start">
							<a href="/">
								<span>See More Portofolio</span>
							</a>
						</div>
					</div>
					<div className="hero-img pb-10 lg:h-auto md:h-1/2 sm:h-1/3">
						<img src={VectorTwo} alt="web-design" />
					</div>
				</div>
				<div className="hero h-full mt-20 px-20 text grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-between items-center align-middle pt-10 gap-x-20">
					<div className="hero-img pb-10 lg:h-auto md:h-1/2 sm:h-1/3">
						<img src={VectorThree} alt="search-engine-optimization" />
					</div>
					<div className="skills flex-col mb-10">
						<h5 className="text-center uppercase mb-2 xl:text-left lg:text-left text-gray-300 tracking-widest">
							Logo
						</h5>
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
			</div>
			<div class="mr-8 ml-8 mt-20 w-auto"></div>
		</>
	);
};

export default Services;
