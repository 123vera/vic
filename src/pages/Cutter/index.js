import React, {Component} from 'react'
import Recommend from '../../components/partials/Recommend'
import Introduce from '../../components/partials/Introduce'
import {ensureLanguage} from "../../utils/utils";
import {DICT} from "../../i18n";
import './index.scss'

class Cutter extends Component {
    render() {
        const language = ensureLanguage()
        const dict = DICT && DICT[language]
        const keyWords = {
            title: 'Visual design',
            years: '2019',
            category: dict && dict.CATEGORY_VISUAL_DESIGN,
        }

        return (
            <div className='work-cutter content'>
                <Introduce keyWords={keyWords}/>

                <div className='design-pics'>
                    <img className='pics' src='/images/cutter.jpg' alt=""/>
                </div>

                <Recommend/>
            </div>
        )
    }
}

export default Cutter
