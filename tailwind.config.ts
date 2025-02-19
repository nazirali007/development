import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				sans: ["'DM Sans'", ...defaultTheme.fontFamily.sans], // Add DM Sans to the default sans stack
			},
			boxShadow: {
				'inactive': 'inset 0 0 0 2px var(--detail-medium-contrast)',
				'active': 'inset 0 0 0 2px var(--detail-high-contrast)' // Assuming you want a different shadow for selected state
			},
			minHeight: {
				'inherit': 'inherit',
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '100%', // prose max width removed
						marginTop: '0',
						marginBottom: '0',
						'ul > li::before': {
							content: 'none',
						},
						'ul > li': {
							listStyleType: 'none',
							marginTop: '0',
							marginBottom: '0',
							paddingTop: '0',
							paddingBottom: '0',
						},
						p: {
							marginTop: '0',
							marginBottom: '0',
						},

						'ol > li': {
							listStyleType: 'none',
							marginTop: '0',
							marginBottom: '0',
							paddingTop: '0',
							paddingBottom: '0',
						},
						h3: {
							marginTop: '0',
							marginBottom: '0',
							fontSize: '2rem',
						}
					}

				}
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				primaryMain: "#007dbc",
				primaryDark: "#005580",
				primaryLight: "#1ab2ff",
				secondaryMain: "#ffea28",
				secondaryDark: "#f5d300",
				secondaryLight: "#ffeb4d",
				textColor: "#212529",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				slidein: {
					from: {
						opacity: "0",
						transform: "translateY(-10px)",
					},
					to: {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				spotlight: {
					"0%": {
						opacity: '0',
						transform: "translate(-72%, -62%) scale(0.5)",
					},
					"100%": {
						opacity: '1',
						transform: "translate(-50%,-40%) scale(1)",
					},
				},
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},
				"fade-in-right": {
					"0%": {
						"opacity": "0",
						"left": '0%'
					},
					"100%": {
						"opacity": "1",
						"left": '100%'
					}
				},
				shimmer: {
					"0%, 90%, 100%": {
						"background-position": "calc(-100% - var(--shimmer-width)) 0",
					},
					"30%, 60%": {
						"background-position": "calc(100% + var(--shimmer-width)) 0",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
				spotlight: "spotlight 2s ease .75s 1 forwards",
				scroll:
					"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
				"fade-in-right": "fade-in-right 0.6s ease-in-out",
				shimmer: "shimmer 8s infinite",
			},
			gridRow: {
				"span-8": "span 8 / span 8",
				"span-10": "span 10 / span 10",
				"span-12": "span 12 / span 12",
				"span-14": "span 14 / span 14",
				"span-16": "span 16 / span 16",
				"span-18": "span 18 / span 18",
			},
		},
	},
	variants: {
		extend: {
			boxShadow: ['after']
		}
	},
	plugins: [
		require('@tailwindcss/typography'), require("tailwindcss-animate"), require('@tailwindcss/forms'), [addVariablesForColors]],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}

export default config;
