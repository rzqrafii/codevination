import React from "react";

const Aboutus = () => {
	return (
		<>
			<div className="container bg-white grid grid-cols-1 px-20 mt-20">
				<div className="what-is-codev text-center mb-20">
					<h1 className="title-codev text-gray-800 text-5xl mb-2 font-bold">
						Codevination
					</h1>
					<h5 className="secondtitle-codev text-gray-400 mb-4 italic">
						Code Developer of Nation
					</h5>
					<p className="desc-codev text-gray-600 leading-loose text-md">
						Jasa pembuatan website yang dikerjakan oleh tim yang proffesional di
						bidang Teknologi Informasi. <br /> Melalui Codevination, kami siap
						menghadirkan solusi secara digital dengan{" "}
						<b>harga yang terjangkau</b>.
					</p>
				</div>
				<div className="what-is-codev text-center mb-20">
					<h1 className="title-codev text-gray-800 text-5xl mb-2 font-bold">
						Codevination
					</h1>
					<h5 className="secondtitle-codev text-gray-400 mb-4 italic">
						Code Developer of Nation
					</h5>
					<p className="desc-codev text-gray-600 leading-loose text-md">
						Jasa pembuatan website yang dikerjakan oleh tim yang proffesional di
						bidang Teknologi Informasi. <br /> Melalui Codevination, kami siap
						menghadirkan solusi secara digital dengan{" "}
						<b>harga yang terjangkau</b>.
					</p>
				</div>
			</div>
			<nav class="flex justify-center text-sm mt-3 md:mt-0 whitespace-nowrap overflow-x-auto py-3 lg:py-0">
				<a
					title="Tailwind CSS Components"
					href="#"
					class="nav-about px-4 py-2 rounded-full text-gray-600 hover:text-gray-800"
				>
					All
				</a>{" "}
				<a
					title="Tailwind Buttons"
					href="/components/buttons"
					class="nav-about px-4 py-2 rounded-full text-white bg-primary font-semibold hover:bg-gray-700"
				>
					Buttons
				</a>{" "}
				<a
					title="Tailwind Forms"
					href="/components/forms"
					class="nav-about px-4 py-2 rounded-full text-gray-600 hover:text-gray-800"
				>
					Forms
				</a>{" "}
				<a
					title="Tailwind Navigations"
					href="/components/navigations"
					class="nav-about px-4 py-2 rounded-full text-gray-600 hover:text-gray-800"
				>
					Navigations
				</a>{" "}
			</nav>
		</>
	);
};

export default Aboutus;
