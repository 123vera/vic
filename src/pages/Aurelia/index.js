import React, {Component} from 'react'
import Recommend from '../../components/partials/Recommend'
import Introduce from '../../components/partials/Introduce'
import {ensureLanguage} from "../../utils/utils";
import {DICT} from "../../i18n";
import './index.scss'

class Aurelia extends Component {
    render() {
        const language = ensureLanguage()
        const dict = DICT && DICT[language]
        const keyWords = {
            title: 'Website concept',
            years: '2018',
            category: dict && dict.CATEGORY_WEB
        }
        return (
            <div className='padding-top work-aurelia content'>
                <Introduce keyWords={keyWords}/>

                <div className='design-pics'>
                    <img className='pics' src='/images/aurelia.png' alt=""/>
                </div>

                <Recommend/>
            </div>
        )
    }
}

export default Aurelia
