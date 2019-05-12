import {DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES} from '../i18n'
import Cookies from 'js-cookie'
import dayjs from 'dayjs'

export const REG = {IP: /^([0-9]{1,3})(\.[0-9]{1,3}){3}$/,}

/**
 * @description 验证 IP 地址
 * @param {string} str 待验证的字符串
 * @returns {boolean} true 为真，false 为假
 */
export const isIP = (str = '') => REG.IP.test(str)

/**
 * @description 获取 Cookie
 * @param {string} key Cookie 的键
 * @param {object} config 配置选项
 * @returns {string}
 */
const _getCookie = key => Cookies.get(key)

export const getCookie = _getCookie

/**
 * @description 设置 Cookie
 * @param {string} key Cookie 的键
 * @param {string} value Cookie 的值
 * @param {object} config 配置选项
 */
export const setCookie = (key = '', value = '', config = {}) => {
    const {hostname = ''} = window.location
    let domain = isIP(hostname)
        ? hostname
        : hostname.split('.').slice(-2).join('.')
    Cookies.set(key, value, {path: '/', domain: domain, ...config})
    Cookies.set(key, value, {path: '/', domain: '.' + domain, ...config})
}

/**
 * @description 切换语言
 * @param {string} language 待更改语言
 */
export const setLanguage = (language) => {
    switch (language) {
        case 'zh-CN':
            dayjs.locale('zh-cn')
            break
        case 'en-US':
            dayjs.locale('en')
            break
        default:
            break
    }
}

/**
 * @description 获取语言（确保获取到）
 * @return {string} 当前语言
 */
export const ensureLanguage = () => {
    const language = _getCookie('language')
    return SUPPORTED_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE
}