import React, {Component} from 'react'
import Recommend from '../../components/partials/Recommend'
import Introduce from '../../components/partials/Introduce'
import {ensureLanguage} from "../../utils/utils";
import {DICT} from "../../i18n";
import './index.scss'

class DNA extends Component {
    render() {
        const language = ensureLanguage()
        const dict = DICT && DICT[language]
        const keyWords = {
            title: 'Visual design',
            years: '2018',
            category: dict && dict.CATEGORY_VISUAL_DESIGN,
        }
        return (
            <div className='padding-top work-dna content'>
                <Introduce keyWords={keyWords}/>

                <div className='design-pics'>
                    <img className='pics' src='/images/dna.jpg' alt=""/>
                </div>

                <Recommend/>
            </div>
        )
    }
}

export default DNA
