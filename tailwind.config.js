/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/*.jsx",
		"./src/**/*.{jsx,js}",
		"./src/**/**/*.{jsx,js}",
		"./src/**/**/**/*.{jsx,js}",
		"./src/**/**/**/**/*.{jsx,js}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {},
	},
	plugins: [require("flowbite/plugin")],
};
