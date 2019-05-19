import React, {Component} from 'react'
import Recommend from '../../components/partials/Recommend'
import Introduce from '../../components/partials/Introduce'
import {ensureLanguage} from "../../utils/utils";
import {DICT} from "../../i18n";
import './index.scss'

class TeamLab extends Component {
    render() {
        const language = ensureLanguage()
        const dict = DICT && DICT[language]
        const keyWords = {
            title: 'Video clips',
            desc: dict && dict.WORKS_TEAMLAB_DESC,
            years: '2019',
            category: dict && dict.CATEGORY_VIDEO,
        }
        return (
            <div className='work-teamlab content'>
                <Introduce keyWords={keyWords}/>

                <div className='design-pics'>
                    <img className='pics' src='/images/team-lab.png' alt=""/>
                </div>

                <Recommend/>
            </div>
        )
    }
}

export default TeamLab
