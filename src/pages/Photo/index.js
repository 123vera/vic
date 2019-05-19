import React, {Component} from 'react'
import Recommend from '../../components/partials/Recommend'
import Introduce from '../../components/partials/Introduce'
import {ensureLanguage} from "../../utils/utils";
import {DICT} from "../../i18n";
import './index.scss'

class Photo extends Component {
    render() {
        const language = ensureLanguage()
        const dict = DICT && DICT[language]
        const keyWords = {
            title: 'Photograph',
            years: '2018-2019',
            category: dict && dict.CATEGORY_PHOTO
        }
        return (
            <div className='work-water content'>
                <Introduce keyWords={keyWords}/>

                <div className='design-pics'>
                    <img className='pics' src='/images/photo-1.png' alt=""/>
                    <img className='pics' src='/images/photo-2.png' alt=""/>
                    <img className='pics' src='/images/photo-3.png' alt=""/>
                    <img className='pics' src='/images/photo-4.png' alt=""/>
                </div>

                <Recommend/>
            </div>
        )
    }
}

export default Photo
