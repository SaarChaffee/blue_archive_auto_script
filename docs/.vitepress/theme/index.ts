import DefaultTheme from 'vitepress/theme'
import form from 'schemastery-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import { createI18n } from 'vue-i18n'
import Markdown from 'markdown-vue'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
})

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {

    app.use(ElementPlus)
    app.use(i18n)
    app.use(form)
    app.provide('__SCHEMASTERY_SLOTS__', { default: {} })
    app.component('k-markdown', Markdown)
  },
}
