import React, {Component} from 'react'
import {DICT} from '../../../i18n'
import {Link} from 'react-router-dom'
import {ensureLanguage, setCookie, setLanguage} from "../../../utils/utils";
import './index.scss'

const antdLocales = [
    {
        label: 'zh-CN',
        value: 'CN'
    }, {
        label: 'en-US',
        value: 'US'
    }
]

class CommonHeader extends Component {
    state = {
        language: null,
        currentLanguage: 'CN',
        currentNav: 'projects',
        isShowNav: false
    }

    componentDidMount() {
        this.initLanguage()
    }

    // 初始化语言
    initLanguage = () => {
        const language = ensureLanguage()
        this.setLang(language)
    }

    setLang = (language) => {
        Promise.resolve(
            setLanguage(language)
        ).then(() => {
            this.setState({language, currentLanguage: language.slice(-2)}, () => {
                setCookie('language', language)
            })
        })
    }

    // 切换主页路由
    switchRoute = (url) => {
        this.setState({currentNav: url, isShowNav: false})
    }

    render() {
        const {language, currentLanguage, currentNav, isShowNav} = this.state
        const dict = DICT && DICT[language]
        const navList = [
            {
                label: 'projects',
                value: dict && dict.NAV_TITLE_01,
            }, {
                label: 'images',
                value: dict && dict.NAV_TITLE_02,
            },
            {
                label: 'contact',
                value: dict && dict.NAV_TITLE_04,
            }
        ]
        return (
            <div id='common-header'>
                <div className='hidden-xs container_60 header-wrapper'>
                    <div>
                        <ul className='nav-ul '>
                            <li>
                                <Link to={`/projects`}>
                                    <img className='logo' src='/images/header-logo.png' alt=""/>
                                </Link>
                            </li>
                            {navList.map(nav => (
                                <li
                                    key={nav.label}
                                    onClick={() => this.switchRoute(nav.label)}
                                    className={currentNav === nav.label ? 'active' : ''}>
                                    <Link to={`/${nav.label}`}> {nav.value}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <ul className='lang-ul'>
                        {antdLocales.map(locale => (
                            <li key={locale.label} className={locale.value === currentLanguage ? 'active' : ''}
                                onClick={() => this.setLang(locale.label)}>{locale.value}</li>
                        ))}
                    </ul>
                </div>

                <div className='hidden-lg hidden-md hidden-sm header-visible'>
                    <Link to='/projects'>xiehui.design</Link>
                </div>

                {!isShowNav &&
                <div className='wow fadeInUp hidden-lg hidden-md hidden-sm add' onClick={() => {
                    this.setState({isShowNav: true})
                }}>+</div>
                }
                <div className={`wow fadeInUp phone-nav-switch ${isShowNav ? '' : 'display-none'}`}>
                    <ul className='phone-nav-ul '>
                        {navList.map(nav => (
                            <li
                                key={nav.label}
                                onClick={() => this.switchRoute(nav.label)}
                                className={currentNav === nav.label ? 'active' : ''}>
                                <Link to={`/${nav.label}`}> {nav.value}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="close-x" onClick={() => {
                        this.setState({isShowNav: false})
                    }}>×
                    </div>
                </div>
            </div>
        )
    }
}

export default CommonHeader