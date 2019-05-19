import React, {Component} from 'react'
import Recommend from '../../components/partials/Recommend'
import Introduce from '../../components/partials/Introduce'
import {ensureLanguage} from "../../utils/utils";
import {DICT} from "../../i18n";
import './index.scss'

class Room extends Component {
    render() {
        const language = ensureLanguage()
        const dict = DICT && DICT[language]
        const keyWords = {
            title: 'Video clips',
            years: '2019',
            category: dict && dict.CATEGORY_VIDEO,
        }
        return (
            <div className='work-room content'>
                <Introduce keyWords={keyWords}/>

                <div className='design-pics'>
                    <img className='pics' src='/images/room.png' alt=""/>
                </div>

                <Recommend/>
            </div>
        )
    }
}

export default Room
