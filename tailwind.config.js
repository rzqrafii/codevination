const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#EE4540",
				secondary: "#2948ff"
			}
		},
		fontFamily: {
			sans: "Montserrat",
			serif: "Vollkorn",
			cursive: "Abril Fatface"
		},
		backgroundColor: (theme) => ({
			...theme("colors"),
			primary: "#EE4540",
			dark: "#0040e7",
			putih: colors.blueGray
		}),
		backgroundImage: (theme) => ({
			"hero-pattern": "url('images/bg-hero.jpg')",
			getintouch: "url('images/bg-getin.png')"
		})
	},
	variants: {
		extend: {}
	},
	plugins: []
};
