module.exports = function(api) {
  api.cache(true)

  const presets = [
    "@babel/preset-env",
    // ["@babel/preset-env", { modules: false }],

    "@babel/preset-react",
  ]
  const plugins = [
    [
      require("@babel/plugin-transform-modules-commonjs"),
      {
        strictMode: false,
      },
    ],
  ]

  return {
    presets,
    plugins,
  }
}
