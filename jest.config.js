module.exports = {
    preset: 'react-native',
    transform: {
      '^.+\\.tsx?$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };
  