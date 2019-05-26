import React, {Component} from 'react'
import Recommend from '../../components/partials/Recommend'
import Introduce from '../../components/partials/Introduce'
import {ensureLanguage} from "../../utils/utils";
import {DICT} from "../../i18n";
import './index.scss'

class IncPay extends Component {
    render() {
        const language = ensureLanguage()
        const dict = DICT && DICT[language]
        const keyWords = {
            title: 'Influence Chain Co. Ltd ',
            desc: dict && dict.WORKS_INCPAY_DESC,
            years: '2019',
            category: dict && dict.CATEGORY_WEBSITE,
            url: 'incpay.org'
        }
        return (
            <div className='padding-top work-incPay content'>
                <Introduce keyWords={keyWords}/>

                <div className='design-pics'>
                    <img className='pics' src='/images/inc-pay.png' alt=""/>
                </div>

                <Recommend/>
            </div>
        )
    }
}

export default IncPay
