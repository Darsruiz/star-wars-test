module.exports = {
  purge: {
    enabled: process.env.WEBPACK_DEV_SERVER === 'true' && process.argv.join(' ').indexOf('build') !== -1,
    content: [
      "./src/**/*.{html,ts}",
      "./projects/**/*.{html,ts}"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        'solid-aaa': '1px solid #444444',
      },
      backgroundImage: theme => ({
        'titlebar': "url('src/assets/navigation.jpg')",
        'background': "url('src/assets/background.jpeg')"
      }),
    },
  },
  variants: {
    extend: {
      filter: ['hover'],
      brightness: ['hover', 'focus'],
    }
  },
  plugins: [
    require('tailwindcss-css-filters'),
  ],
}