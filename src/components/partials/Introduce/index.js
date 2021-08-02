import React, {Component} from "react";
import {WOW} from 'wowjs'
import {ensureLanguage} from "../../../utils/utils";
import {DICT} from "../../../i18n";
import './index.scss'

class Introduce extends Component {
    componentDidMount() {
        let wow = new WOW({
            live: false
        })
        wow.init()
    }

    render() {
        const language = ensureLanguage()
        const dict = DICT && DICT[language]
        const {keyWords} = this.props
        return (
            <div className='wow fadeInRight introduce'>
                <p>{keyWords.title || 'Influence Chain Co. Ltd'} </p>
                <div className='row desc'>
                    <div className='column col-lg-8 col-md-8 col-sm-8 col-xs-12 desc-left'>
                        {keyWords.desc}
                    </div>
                    <ul className='column col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-lg-3 col-md-3 col-sm-3 col-xs-12  desc-right'>
                        <li>{dict && dict.WORKER_YEARS} <span>{keyWords.years}</span></li>
                        <li>{dict && dict.WORKER_CATEGORY} <span>{keyWords.category}</span></li>
                        <li>{dict && dict.WORKER_DESIGNER} <span>{dict && dict.WORKER_NAME}</span></li>
                        <li>{keyWords.url}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Introduce