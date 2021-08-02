import React, {Component} from 'react'
import Recommend from '../../components/partials/Recommend'
import Introduce from '../../components/partials/Introduce'
import {DICT} from "../../i18n";
import {ensureLanguage} from "../../utils/utils";
import './index.scss'

class ACP extends Component {
    render() {
        const language = ensureLanguage()
        const dict = DICT && DICT[language]
        const keyWords = {
            title: 'Website concept',
            years: '2018',
            category: dict && dict.CATEGORY_WEB
        }

        return (
            <div className='padding-top work-acp content'>
                <Introduce keyWords={keyWords}/>

                <div className='design-pics'>
                    <img className='pics' src='/images/acp.jpg' alt=""/>
                </div>

                <Recommend/>
            </div>
        )
    }
}

export default ACP
