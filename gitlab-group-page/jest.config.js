module.exports = {
  preset: "react-native",
  moduleFileExtension: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json'
    }
  }
};