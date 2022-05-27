/**
module.exports에 빨간줄이 생기는 부분은 env의 es2021: true를 commonjs: true로 바꿔서 해결했다.
자동생성된 eslint의 코드가 module.exports로 생성되어 그런듯 하다.
*/
module.exports = {
  env: {
    browser: true,
    commonjs: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', '@emotion/eslint-plugin', 'newline'],
  rules: {
    /** 함수의 명시적 타입 리턴을 명시적으로 써주지 않아도 되도록 하는 옵션. 이건 off 하는게 맞을까? */
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'import/no-cycle': 'off',
    'import/extensions': ['off'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.js'] }],
    'react/button-has-type': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'no-console': 'off',
    'jsx-a11y/label-has-associated-control': ['off'],
    'react/jsx-sort-props': [1, { multiline: 'first' }],
    // 타입스크립트 interface 멀티라인시 콤마 적용
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'comma',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    // 객체 구조분해할당 프로퍼티 2개 이상시 줄바꿈 처리
    'newline/object-property': ['error', { minItems: 2 }],
    // import 순서
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        alphabetize: { order: 'desc' },
      },
    ],
    // 탭 길이 설정
    indent: ['error', 2],
    'max-len': ['error', { code: 200 }],
    // 구조분해할당, 가져오기, 내보내기 프로퍼티 2개 이상일시 멀티라인 적용
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 2,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 2,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 2,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 2,
        },
      },
    ],
    // 객체 멀티라인 강제 적용
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: false },
    ],
  },
};
