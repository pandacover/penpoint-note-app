module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'sidebar-height': 'calc(100vh - 64px)'
      },
      width: {
        'content-width': 'calc(100vw - 192px)'
      }
    },
  },
  plugins: [],
}