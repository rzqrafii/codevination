import React from "react";
import ImageHero from "../images/heroes-services.png";

const HeroServices = () => {
	return (
		<div className="bg-hero-pattern mb-20 xl:h-screen lg:h-screen md:h-auto sm:h-auto w-auto">
			<div className="hero h-full text grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 flex justify-center items-center pt-10 gap-x-4">
				<div className="heroes px-20">
					<h1 className="text-5xl mb-6 text-white font-bold leading-snug">
						Services
					</h1>
					<h2 className="text-1xl mb-16 leading-loose text-gray-200 h-auto">
						Beberapa layanan yang kalian dapatkan dan jasa pembuatan website ini
						adalah <b>SEO</b>, <b>Website Design</b>, dan <b>Logo</b>
					</h2>
				</div>
				<div className="flex justify-center items-center hero-img p-20 lg:h-full lg:w-full">
					<img src={ImageHero} alt="" />
				</div>
			</div>
		</div>
	);
};

export default HeroServices;
