module.exports = {
  env: {
    node: true, // 添加這一行
    browser: true,
    // ... 其他環境 ...
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // 使用 Prettier 規則
  ],
  rules: {
    'react/jsx-max-props-per-line': [1, { maximum: 1 }], // 每行最多一個屬性
    'react/jsx-indent': [2, 2], // 使用 2 個空格縮排
    'react/jsx-indent-props': [2, 2], // 使用 2 個空格縮排屬性
    'react/react-in-jsx-scope': 'off', // 禁用這條規則
  },
  // 其他配置...
}
