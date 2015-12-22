module.exports = {
  plugins: [
    [require('babel-plugin-react-transform').default, {
      transforms: [
        {
          transform: 'react-transform-hmr',
          imports: ['react'],
          locals: ['module'],
        }, {
          transform: 'react-transform-catch-errors',
          imports: ['react', 'redbox-react'],
        },
      ],
    }],
  ]
};
