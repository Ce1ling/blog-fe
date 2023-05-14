import { 
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  shortcuts: [],
  rules: [
    // 单行溢出隐藏
    ['ellipsis-uniline', {
      'white-space': 'nowrap',
      'overflow': 'hidden',
      'text-overflow': 'ellipsis'
    }],
    // 多行溢出隐藏
    [/^ellipsis-(\d+)$/, ([, n]) => ({ 
      'overflow': 'hidden',
      'text-overflow': 'ellipsis',
      'display': '-webkit-inline-box',
      '-webkit-line-clamp': n,
      '-webkit-box-orient': 'vertical'
    })]
  ],
  theme: {
    colors: {}
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
  transformers: [
    transformerAttributifyJsx()
  ]
})