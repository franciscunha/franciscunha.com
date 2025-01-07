import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		colors: {
			bordercolor: colors.stone[700],
			bgcolor: colors.stone[900],
			fontcolor: colors.slate[100],
			tagcolor: colors.emerald[800]
		}
	},

	plugins: []
} satisfies Config;
