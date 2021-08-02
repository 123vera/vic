import React, {Component} from 'react'
import Recommend from '../../components/partials/Recommend'
import Introduce from '../../components/partials/Introduce'
import './index.scss'
import {ensureLanguage} from "../../utils/utils";
import {DICT} from "../../i18n";

class Arulai extends Component {
    render() {
        const language = ensureLanguage()
        const dict = DICT && DICT[language]
        const keyWords = {
            title: 'Visual design',
            years: '2019',
            category: dict && dict.CATEGORY_VISUAL_DESIGN,
        }
        return (
            <div className='padding-top work-arulai content'>
                <Introduce keyWords={keyWords}/>

                <div className='design-pics'>
                    <img className='pics' src='/images/arulai-1.png' alt=""/>
                    <img style={{padding: '12% 0'}} className='pics' src='/images/arulai-2.png' alt=""/>
                    <img className='pics' src='/images/arulai-3.png' alt=""/>
                </div>

                <Recommend/>
            </div>
        )
    }
}

export default Arulai
