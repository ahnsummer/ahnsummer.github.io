module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,vue}"], // 이런 패턴을 가진 파일에서 테일윈드가 사용되는 범위를 확인 후 필요한애들만 랜더링 = 용량이줆
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
}
