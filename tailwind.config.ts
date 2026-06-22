import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			primary: 'var(--primary-color)',
  			'primary-dark': 'var(--primary-dark)',
  			'primary-light': 'var(--primary-light)',
  			'primary-50': 'var(--primary-50)',
  			'primary-100': 'var(--primary-100)',
  			'primary-200': 'var(--primary-200)',
  			'primary-600': 'var(--primary-600)',
  			'primary-700': 'var(--primary-700)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
