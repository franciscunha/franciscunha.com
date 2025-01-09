import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		colors: {
			bordercolor: colors.teal[800],
			bgcolor: colors.teal[950],
			fontcolor: colors.slate[100],
			tagcolor: colors.teal[600]
		}
	},

	plugins: []
} satisfies Config;
