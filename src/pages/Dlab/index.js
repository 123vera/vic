import React, {Component} from 'react'
import Recommend from '../../components/partials/Recommend'
import Introduce from '../../components/partials/Introduce'
import './index.scss'
import {ensureLanguage} from "../../utils/utils";
import {DICT} from "../../i18n";

class Dlab extends Component {
    render() {
        const language = ensureLanguage()
        const dict = DICT && DICT[language]
        const keyWords = {
            title: 'Website concept',
            desc: dict && dict.WORKS_DLAB_DESC,
            years: '2018',
            category: dict && dict.CATEGORY_WEBSITE,
            url: 'dlab.com.cn'
        }
        return (
            <div className='work-dlab content'>
                <Introduce keyWords={keyWords}/>

                <div className='design-pics'>
                    <img className='pics' src='/images/dlab.png' alt=""/>
                </div>

                <Recommend/>
            </div>
        )
    }
}

export default Dlab
