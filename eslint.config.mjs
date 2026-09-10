import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'

export default [
  // 取代舊的 --ignore-path .gitignore
  { ignores: [...resolveIgnoresFromGitignore(), 'dist/**'] },

  // 等同舊的 extends: ['eslint:recommended']
  js.configs.recommended,

  // 等同舊的 extends: ['plugin:vue/vue3-essential']
  ...pluginVue.configs['flat/essential'],

  // neostandard 是 eslint-config-standard 在 flat config 時代的後繼者
  // 它預設已帶 node globals，所以不需要額外的 globals 套件
  ...neostandard({
    env: ['browser'],
    files: ['**/*.vue']
  }),

  // 這幾支是 CommonJS，不是 ESM（取代舊的 /* eslint-env node */）
  {
    files: ['ghpages.js', 'postcss.config.js', 'tailwind.config.js'],
    languageOptions: { sourceType: 'commonjs' }
  }
]
