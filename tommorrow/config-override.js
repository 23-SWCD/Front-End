const webpack = require("webpack");

module.exports = function override(config) {
  // resolve.fallback 설정에 path-browserify와 browserify-fs 모듈을 추가
  config.resolve.fallback = {
    ...config.resolve.fallback,
    path: require.resolve("path-browserify"),
    fs: false, // browserify-fs 모듈을 사용하기 위해 fs를 false로 설정
  };

  // ProvidePlugin을 사용하여 전역에 path 모듈을 추가
  config.plugins.push(
    new webpack.ProvidePlugin({
      path: ["path-browserify"],
    })
  );

  return config;
};
