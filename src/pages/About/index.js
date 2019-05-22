import React, {Component} from 'react'
import {DICT} from '../../i18n'
import {WOW} from 'wowjs'
import {ensureLanguage} from "../../utils/utils";
import './index.scss'

class Contact extends Component {
    componentDidMount() {
        let wow = new WOW({
            live: false
        })
        wow.init()
    }

    render() {
        const language = ensureLanguage()
        const dict = DICT && DICT[language]
        return (
            <div id='about' className='wow fadeInRight container'>
                <div className='row wrapper'>
                    <div
                        className='column col-lg-5 col-md-5 col-sm-5 col-xs-12 img-wrapper'>
                        <img src='/images/contact-me.png' alt=''/>
                    </div>
                    <div
                        className='column col-lg-offset-1 col-md-offset-1 col-sm-offset-1  col-lg-6 col-md-6 col-sm-6 col-xs-12 about-me'>
                        <h2>{dict && dict.ABOUT_ME_TITLE}</h2>
                        <p>{dict && dict.ABOUT_ME_DESC_01}</p>
                        <p>{dict && dict.ABOUT_ME_DESC_02}</p>
                        <p>{dict && dict.ABOUT_ME_DESC_03}</p>
                        <p>{dict && dict.ABOUT_ME_DESC_04}</p>
                    </div>


                </div>
            </div>
        )
    }
}

export default Contact