import React, {Component} from 'react'
import Recommend from '../../components/partials/Recommend'
import Introduce from '../../components/partials/Introduce'
import {ensureLanguage} from "../../utils/utils";
import {DICT} from "../../i18n";
import './index.scss'

class Stec extends Component {
    render() {
        const language = ensureLanguage()
        const dict = DICT && DICT[language]
        const keyWords = {
            title: 'STEC Co. Ltd ',
            years: '2019',
            category: dict && dict.CATEGORY_WEBSITE,
            url: 'steclab.com'
        }
        return (
            <div className=' work-stec content'>
                <Introduce keyWords={keyWords}/>

                <div className='design-pics'>
                    <img className='pics' src='/images/stec.png' alt=""/>
                </div>

                <Recommend/>
            </div>
        )
    }
}

export default Stec
