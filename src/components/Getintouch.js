import React from "react";
import { Link } from "react-router-dom";

const Getintouch = () => {
	return (
		<>
			<div className="flex bg-getintouch p-20 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-20 justify-center items-center gap-y-5 ">
				<div className="name-getin leading-snug text-4xl text-white font-bold text-center md:text-left">
					Mau Punya Website dengan Harga Murah?
				</div>
				<div className="flex btn-getin justify-center md:justify-end items-center float-right">
					<Link
						className="flex justify-center items-center shadow-1xl w-48 hover:shadow-2xl p-4 text-white bg-yellow-400 block rounded-lg text-1xl hover:bg-yellow-500 font-semibold"
						to="/"
					>
						Pesan Sekarang
					</Link>
				</div>
			</div>
		</>
	);
};

export default Getintouch;
