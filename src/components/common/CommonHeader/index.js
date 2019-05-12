import React, {Component} from 'react'
import {DICT} from '../../../i18n'
import {ensureLanguage, setCookie, setLanguage} from "../../../utils/utils";
import './index.scss'

const antdLocales = [
    {
        label: 'zh-CN',
        value: 'ZH'
    }, {
        label: 'en-US',
        value: 'US'
    }
]

class CommonHeader extends Component {
    state = {
        language: null
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
            this.setState({language}, () => {
                setCookie('language', language)
            })
        })
    }

    render() {
        const {language} = this.state
        const dict = DICT && DICT[language]
        return (
            <div id='common-header'>
                <div className='container_60 header-wrapper'>
                    <div>
                        <span/>
                        <ul className='nav-ul '>
                            <li>{dict && dict.NAV_TITLE_01}</li>
                            <li>{dict && dict.NAV_TITLE_02}</li>
                            <li>{dict && dict.NAV_TITLE_03}</li>
                            <li>{dict && dict.NAV_TITLE_04}</li>
                        </ul>
                    </div>

                    <ul className='lang-ul'>
                        {antdLocales.map(locale => (
                            <li key={locale.label} onClick={() => this.setLang(locale.label)}>{locale.value}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default CommonHeader