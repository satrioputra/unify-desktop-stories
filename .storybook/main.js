const path = require('path');

module.exports = {
  stories: [
    './stories/**/*.stories.@(js|mdx)',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-notes',
  ],
  webpackFinal: async config => {
    /**
     * Old Config (don't remove it yet)
     */
    // config.module.rules.push(
    //   {
    //     test: /\.(ts|tsx)?$/,
    //     use: [
    //       {
    //         loader: require.resolve('babel-loader'),
    //       },
    //     ],
    //   },
    //   {
    //     test: /\.stories\.(ts|tsx)?$/,
    //     loaders: [require.resolve('@storybook/source-loader')],
    //     enforce: 'pre',
    //   }
    // );

    config.resolve.alias = {
      ...config.resolve.alias,
      '@storyComponents': path.resolve(__dirname, '../.storybook/components'),
    };

    // This config below needed since aliasing of path are defined in tsconfig.json
    config.resolve.plugins = config.resolve.plugins || [];

    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx', '.mdx', '.json');

    return config;
  },
};
