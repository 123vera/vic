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
            <div id='contact' className='wow fadeInRight container'>
                <div className='row wrapper'>
                    <div className='column hidden-md hidden-lg hidden-sm col-xs-12 img-wrapper-xs'>
                        <img src='/images/contact-me.png' alt=''/>
                    </div>
                    <ul className='column col-lg-5 col-md-5 col-sm-5 col-xs-12 msg'>
                        <li>vicdesignstyle@gmail.co</li>
                        <li>Instagram / Wechat / Weibo</li>
                        <li>7th Floor, Bund.27, Shanghai, China, 200002 <br/>{dict && dict.CONTACT_ADDRESS}</li>
                    </ul>
                    <div
                        className='column hidden-xs col-md-offset-2 col-lg-offset-3 col-sm-offset-1 col-lg-4 col-md-4 col-sm-4 col-xs-12 img-wrapper'>
                        <img src='/images/contact-me.png' alt=''/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact