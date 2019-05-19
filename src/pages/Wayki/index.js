import React, {Component} from 'react'
import Recommend from '../../components/partials/Recommend'
import Introduce from '../../components/partials/Introduce'
import {ensureLanguage} from "../../utils/utils";
import {DICT} from "../../i18n";
import './index.scss'

class Wayki extends Component {
    render() {
        const language = ensureLanguage()
        const dict = DICT && DICT[language]
        const keyWords = {
            title: 'Website concept',
            years: '2018',
            category:  dict && dict.CATEGORY_WEB,
        }
        return (
            <div className='work-wayki content'>
                <Introduce keyWords={keyWords}/>

                <div className='design-pics'>
                    <img className='pics' src='/images/Wayki.png' alt=""/>
                </div>

                <Recommend/>
            </div>
        )
    }
}

export default Wayki
