import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  rules: {
    'node/prefer-global/buffer': 'off',
    'no-explicit-any': 'off',
  },
})
