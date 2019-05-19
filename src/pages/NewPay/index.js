import React, {Component} from 'react'
import Recommend from '../../components/partials/Recommend'
import Introduce from '../../components/partials/Introduce'
import {ensureLanguage} from "../../utils/utils";
import {DICT} from "../../i18n";
import './index.scss'

class NewPay extends Component {
    render() {
        const language = ensureLanguage()
        const dict = DICT && DICT[language]
        const keyWords = {
            title: 'Website concept',
            years: '2019',
            category: dict && dict.CATEGORY_WEB,
        }
        return (
            <div className='work-new-pay content'>
                <Introduce keyWords={keyWords}/>

                <div className='design-pics'>
                    <img className='pics' src='/images/new-pay.png' alt=""/>
                </div>

                <Recommend/>
            </div>
        )
    }
}

export default NewPay
