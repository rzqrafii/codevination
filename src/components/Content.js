import React from "react";
import IconOne from "../images/fast.svg";
import IconTwo from "../images/lowprices.svg";
import IconThree from "../images/certified.svg";
import { Link } from "react-router-dom";

const Content = () => {
	return (
		<>
			<div className="portofolio-title text-4xl mb-16 text-gray-800 font-bold text-center">
				<span>Why Choose us?</span>
			</div>
			<div className="portofolio-card px-8 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-3 gap-y-6">
				<div class="choosen-items">
					<section className="flex flex-col justify-center items-center text-center">
						<img src={IconOne} className="mb-4 px-10 w-3/4" />
						<h2 class="text-lg text-gray-600 font-bold mb-4">Fast</h2>
						<p class="text-sm text-gray-400">
							Omnis consectetur voluptatem labore aut et vel itaque recusandae.
						</p>
					</section>
				</div>
				<div class="choosen-items">
					<section className="flex flex-col justify-center items-center text-center">
						<img src={IconTwo} className="mb-4 px-10" />
						<h2 class="text-lg text-gray-600 font-bold mb-4">Low Prices</h2>
						<p class="text-sm text-gray-400">
							Omnis consectetur voluptatem labore aut et vel itaque recusandae.
						</p>
					</section>
				</div>
				<div class="choosen-items">
					<section className="flex flex-col justify-center items-center text-center">
						<img src={IconThree} className="mb-4 px-10" />
						<h2 class="text-lg text-gray-600 font-bold mb-4">Certified</h2>
						<p class="text-sm text-gray-400">
							Omnis consectetur voluptatem labore aut et vel itaque recusandae.
						</p>
					</section>
				</div>
			</div>
			<div class="mr-8 ml-8 mt-20 w-auto">
				<hr />
			</div>
		</>
	);
};

export default Content;
