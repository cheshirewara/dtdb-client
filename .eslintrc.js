module.exports = {
  root: true,
  env: {
    'browser': true,
    'es6': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    "window": true,
    "process": true,
    "module": true,
  },
  // *.vue ファイルを lint にかけるために必要
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off', //使っていない変数あってもOK
    // タグの最後で改行しないで
    'vue/html-closing-bracket-newline': [2, {'multiline': 'never'}],
    // 不要なカッコは消す
    'no-extra-parens': 1,
    // 無駄なスペースは削除
    'no-multi-spaces': 2,
    // 不要な空白行は削除。2行開けてたらエラー
    'no-multiple-empty-lines': [2, {'max': 1}],
    // 関数とカッコはあけない(function hoge() {/** */})
    'func-call-spacing': [2, 'never'],
    // true/falseを無駄に使うな
    'no-unneeded-ternary': 2,
    // セミコロンは禁止
    'semi': [2, 'never'],
    // 文字列はシングルクオートのみ
    'quotes': [2, 'single'],
    // varは禁止
    'no-var': 2,
    // jsのインデントは２
    'indent': [2, 2],
    // かっこの中はスペースなし！違和感
    'space-in-parens': [2, 'never'],
    // カンマの前後にスペース入れる？
    'comma-spacing': 2,
    // 配列のindexには空白入れるな(hogehoge[ x ])
    'computed-property-spacing': 2,
    // キー
    'key-spacing': 2,
    // キーワードの前後には適切なスペースを
    'keyword-spacing': 2,
  }
}
