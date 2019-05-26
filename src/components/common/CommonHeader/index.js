import React, {Component} from 'react'
import {DICT} from '../../../i18n'
import {Link} from 'react-router-dom'
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
        currentNav: window.location.pathname.split('/')[1] || 'projects',
        isShowNav: false
    }
    // 切换主页路由
    switchRoute = (url) => {
        this.setState({currentNav: url, isShowNav: false})
    }

    render() {
        const {currentNav} = this.state
        const {setLang, language, currentLanguage, isDarkBg} = this.props
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
                label: 'portrait',
                value: dict && dict.NAV_TITLE_03,
            },
            {
                label: 'about',
                value: dict && dict.NAV_TITLE_04,
            },
            {
                label: 'contact',
                value: dict && dict.NAV_TITLE_05,
            }
        ]
        return (
            <div id='common-header' className={`${isDarkBg ? 'color-black' : 'color-white'}`}>
                <div className='header-box'>
                    <div className='header-visible'>
                        <Link to='/projects'>XIEHUI DESIGN</Link>
                    </div>

                    <div className='hidden-xs header-wrapper'>
                        <div>
                            <ul className='nav-ul '>
                                {navList.map(nav => (
                                    <li
                                        key={nav.label}
                                        onClick={() => this.switchRoute(nav.label)}
                                        className={currentNav === nav.label ? 'active' : ''}>
                                        <Link to={`/${nav.label}`}>
                                            {nav.value && nav.value.charAt(0).toUpperCase() + nav.value.slice(1)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <ul className='lang-ul'>
                            {antdLocales.map(locale => (
                                <li key={locale.label} className={currentLanguage === locale.value ? 'active' : ''}
                                    onClick={() => setLang(locale)}><a>
                                    {locale.value}
                                </a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommonHeader