import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: 'var(--color-primary-800)',
              '@media (hover: hover)': {
                '&:hover': {
                  color: 'var(--color-primary-900)',
                },
              },
              code: {
                color: 'var(--color-blue-800)',
              },
            },
            'h1, h2': {
              fontWeight: '700',
              letterSpacing: 'var(--tracking-tight)',
            },
            h3: {
              fontWeight: '600',
            },
            'code:not(pre code)': {
              color: 'var(--color-primary-800)',
            },
          },
        },
        invert: {
          css: {
            a: {
              color: 'var(--color-primary-200)',
              '@media (hover: hover)': {
                '&:hover': {
                  color: 'var(--color-primary-100)',
                },
              },
              code: {
                color: 'var(--color-blue-200)',
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: 'var(--color-gray-100)',
            },
            'code:not(pre code)': {
              color: 'var(--color-primary-200)',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default tailwindConfig
