/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'media',
	theme: {
		extend: {
			colors: {
				background: 'rgb(var(--color-background) / <alpha-value>)',
				foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				muted: 'rgb(var(--color-muted) / <alpha-value>)',
				border: 'rgb(var(--color-border) / <alpha-value>)',
				green: 'rgb(var(--color-green) / <alpha-value>)',
				orange: 'rgb(var(--color-orange) / <alpha-value>)',
				lime: 'rgb(var(--color-lime) / <alpha-value>)',
				gold: 'rgb(var(--color-gold) / <alpha-value>)',
				red: 'rgb(var(--color-red) / <alpha-value>)',
				comment: 'rgb(var(--color-comment) / <alpha-value>)',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['JetBrains Mono', 'monospace'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			typography: () => ({
				DEFAULT: {
					css: {
						maxWidth: 'none',
						color: 'rgb(var(--color-foreground))',
						a: {
							color: 'rgb(var(--color-green))',
							fontWeight: '500',
							textDecoration: 'underline',
							textDecorationColor: 'rgb(var(--color-green) / 0.4)',
							textUnderlineOffset: '3px',
							transition: 'text-decoration-color 0.2s ease, color 0.2s ease',
							'&:hover': {
								color: 'rgb(var(--color-green))',
								textDecorationColor: 'rgb(var(--color-green))',
							},
						},
						strong: {
							color: 'rgb(var(--color-orange))',
						},
						h1: {
							color: 'rgb(var(--color-gold))',
						},
						h2: {
							color: 'rgb(var(--color-gold))',
						},
						h3: {
							color: 'rgb(var(--color-gold) / 0.85)',
						},
						code: {
							backgroundColor: 'rgb(var(--color-muted))',
							color: 'rgb(var(--color-red))',
							padding: '0.2rem 0.4rem',
							borderRadius: '0.25rem',
							fontWeight: '400',
							fontFamily: 'JetBrains Mono, monospace',
						},
						'code::before': { content: '""' },
						'code::after': { content: '""' },
						blockquote: {
							borderLeftColor: 'rgb(var(--color-comment))',
							color: 'rgb(var(--color-comment))',
						},
					},
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
