import React from "react";
import { Link } from "react-router-dom";
import TypeIt from "typeit-react";
import ImageHero from "../images/heroes-img.svg";
import ImageSVG from "../images/logo.svg";
// import DocumentPDF from "../uploads/CV-RafiiRizqullah.pdf";

const Hero = () => {
	return (
		<div className="bg-hero-pattern mb-20 xl:h-screen lg:h-screen md:h-auto sm:h-auto w-auto">
			<div className="hero h-full text grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 flex justify-center items-center pt-10 gap-x-4">
				<div className="heroes px-20">
					<img src={ImageSVG} alt="logo-codevination" className="mb-6" />
					<h1 className="text-5xl mb-6 text-white font-bold leading-snug">
						Buat Website <br /> Pertamamu Disini!
					</h1>
					<h2 className="text-1xl mb-16 leading-loose text-gray-200 h-auto">
						Kami siap membantu anda dalam meningkatkan usaha di era 4.0
					</h2>
					<div className="btn-heroes">
						<Link
							className="animate-bounce flex justify-center items-center mr-2 w-48 p-4 text-white bg-yellow-400 rounded-lg text-1xl hover:shadow-xl hover:bg-yellow-500 font-semibold"
							to="/"
						>
							Buat Sekarang
						</Link>
					</div>
				</div>
				<div className="flex justify-center items-center hero-img p-20 lg:h-full lg:w-full">
					<img src={ImageHero} alt="" />
				</div>
			</div>
		</div>
	);
};
export default Hero;
