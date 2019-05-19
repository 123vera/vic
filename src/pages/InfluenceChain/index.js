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
            desc: dict && dict.WORKS_INC_DESC,
            years: '2019',
            category: dict && dict.CATEGORY_WEBSITE,
            url: 'influencechain.org'
        }
        return (
            <div className=' work-inc content'>
                <Introduce keyWords={keyWords}/>

                <div className='design-pics'>
                    <img className='pics' src='/images/influence-chain.png' alt=""/>
                </div>

                <Recommend/>
            </div>
        )
    }
}

export default InfluenceChain
