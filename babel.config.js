module.exports = {
    presets: ['next/babel'],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          useESModules: true,
        },
      ],
    ],
  };
  