// tailwind.config.js
module.exports = {
 content: [
  "./src/app/**/*.{js,ts,jsx,tsx}",
  "./src/page/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
],

  theme: {
    extend: {
      colors: {
        // Основные цвета
        onyx: '#000000',
        smoke: '#333333',
        snow: '#FFFFFF',
        charcoal: '#111111',
        midnight: '#010101',

        // Фоновые цвета
        bgNight: '#000000',
        bgCloud: '#E0E4EB',
        bgFog: '#EFEFF6',

        // Цвет линий
        lineInk: '#000000',

        // Вспомогательные
        infoWarmSun: '#FFBB00',
        alertCrimson: '#E42215B2',
        alertCrimsonLight: '#E4221580',
        successLeaf: '#34C759B2',

        // Кнопки
        buttonAlert: '#FF0808',
        buttonClean: '#FFFFFF',
      },
      fontFamily: {
        main: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
