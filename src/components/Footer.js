import React from "react";
import ImageLogo from "../images/r.svg";

const Footer = () => {
	return (
		<footer className="footer bg-white relative pt-1 mt-40 border-t border-gray-50">
			<div className="container mx-auto px-6">
				<div className="sm:flex sm:mt-8">
					<div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
						<div className="flex flex-col">
							<span className="font-bold text-2xl text-gray-600 mb-2">
								Codevination
							</span>
							<span className="my-2 text-gray-200 ">
								We kaboom your beauty holiday <br />
								instanly and memorable
							</span>
						</div>
						<div className="flex flex-col">
							<span className="font-bold text-gray-600 mt-4 md:mt-0 mb-2">
								For Beginners
							</span>
							<span className="my-2">
								<a
									href="#"
									className="text-gray-200 text-md hover:text-gray-800"
								>
									New Account
								</a>
							</span>
							<span className="my-2">
								<a
									href="#"
									className="text-gray-200  text-md hover:text-gray-800"
								>
									Start Booking a Room
								</a>
							</span>
							<span className="my-2">
								<a
									href="#"
									className="text-gray-200 text-md hover:text-gray-800"
								>
									Use Payments
								</a>
							</span>
						</div>
						<div className="flex flex-col">
							<span className="font-bold text-gray-600 mt-4 md:mt-0 mb-2">
								Explore us
							</span>
							<span className="my-2">
								<a
									href="#"
									className="text-gray-200  text-md hover:text-gray-800"
								>
									About
								</a>
							</span>
							<span className="my-2">
								<a
									href="#"
									className="text-gray-200  text-md hover:text-gray-800"
								>
									Privacy Policy{" "}
								</a>
							</span>
							<span className="my-2">
								<a
									href="#"
									className="text-gray-200  text-md hover:text-gray-800"
								>
									Terms & Conditions{" "}
								</a>
							</span>
						</div>
						<div className="flex flex-col">
							<span className="font-bold text-gray-600 mt-4 md:mt-0 mb-2">
								Getting touch
							</span>
							<span className="my-2 text-md text-gray-200">
								support@codevinatio.id
							</span>
							<span className="my-2 text-md text-gray-200">021-000-8000</span>
							<span className="my-2 text-md text-gray-200">
								Codevination, Jakarta
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="container mx-auto px-6">
				<div className="mt-16 flex flex-col items-center">
					<div className="sm:w-2/3 text-center py-6">
						<p className="text-sm text-gray-600 mb-2">© 2020 Codevination </p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
