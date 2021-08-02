const LangEnUs = require('./lang/en-US')
const LangZhCn = require('./lang/zh-CN')

// 字典
const DICT = {
  'zh-CN': LangZhCn,
  'en-US': LangEnUs
}

// 支持语言列表
const SUPPORTED_LANGUAGES = Object.keys(DICT)

// 默认语言
const DEFAULT_LANGUAGE = 'en-US'

module.exports = { DICT, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE }
