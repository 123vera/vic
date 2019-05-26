import React, {Component} from 'react'
import Recommend from '../../components/partials/Recommend'
import Introduce from '../../components/partials/Introduce'
import {ensureLanguage} from "../../utils/utils";
import {DICT} from "../../i18n";
import './index.scss'

class InfluenceChain extends Component {
    render() {
        const language = ensureLanguage()
        const dict = DICT && DICT[language]
        const keyWords = {
            title: 'GBIB Co. Ltd ',
            desc: dict && dict.WORKS_GBIB_DESC,
            years: '2018',
            category: dict && dict.CATEGORY_WEB,
            url: 'gbib.net'
        }
        return (
            <div className='padding-top work-gbib content'>
                <Introduce keyWords={keyWords}/>

                <div className='design-pics'>
                    <img className='pics' src='/images/gbib.png' alt=""/>
                </div>

                <Recommend/>
            </div>
        )
    }
}

export default InfluenceChain
