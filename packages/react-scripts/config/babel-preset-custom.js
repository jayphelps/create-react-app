module.exports = {
  plugins: [
    // Turns JSX into createElement() calls
    [require.resolve('babel-plugin-transform-react-jsx'), {
      pragma: 'createElement',
    }],
    // Import react automatically, as need, when JSX is used
    [require.resolve('babel-plugin-jsx-pragmatic'), {
      module: 'react',
      import: 'createElement',
      export: 'createElement'
    }]
  ]
};
