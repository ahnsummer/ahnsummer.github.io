/** @type {import('tailwindcss').Config} */

// const { default: plugin } = require('tailwindcss/plugin')
const plugin = require("tailwindcss/plugin");

const customPlugins = plugin(({addUtilities}) => {
  addUtilities({
    ".flex-center": {
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
    }
  })
})
module.exports = {
  content: ["./src/**/*.tsx"], // src폴더 안에 모든 폴더안에 모든 파일 중 tsx확장자에만 tailwindcss를 사용한다. 라는 뜻
  theme: {
    extend: {
      colors: {
        "primary": "#fc9241"
      }
    },
  },
  plugins: [customPlugins],
}
