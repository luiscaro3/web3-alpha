const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.

  config.resolve.fallback = {
    events: require.resolve('events'),
    http: require.resolve('http'),
  }


  return config;
};
