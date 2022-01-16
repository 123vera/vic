import React, { Component } from 'react'
import Recommend from '../../components/partials/Recommend'
import Introduce from '../../components/partials/Introduce'
import { ensureLanguage } from "../../utils/utils";
import { DICT } from "../../i18n";
import './index.scss'

class Inex extends Component {
    render() {
        const language = ensureLanguage()
        const dict = DICT && DICT[language]
        const keyWords = {
            title: dict && dict.KEY_TITLE_03,
            years: '2021',
            category: dict && dict.CATEGORY_APPLET,
            desc: dict && dict.WORKS_WANHAO_DESC,
            url: dict && dict.KEY_TITLE_03,
        }
        return (
            <div className='padding-top work-inex content'>
                <Introduce keyWords={ keyWords } />

                <div className='design-pics'>
                    <img className='pics' src='/images/wanhao.png' alt="" />
                </div>

                <Recommend />
            </div>
        )
    }
}

export default Inex
