import React, {Component} from 'react'
import './index.scss'

class Contact extends Component {
    render() {
        return (
            <div id='contact' className='container'>
                <div className='row wrapper'>
                    <ul className='column col-lg-5 col-md-5 col-sm-5 col-xs-12 msg'>
                        <li>vicdesignstyle@gmail.co</li>
                        <li>Instagram / Wechat / Weibo</li>
                        <li>7th Floor, Bund.27, Shanghai, China, 200002 <br/>上海市黃浦區中山東一路27號7樓</li>
                    </ul>
                    <div className='column col-md-offset-3 col-lg-offset-3 col-sm-offset-3 col-lg-4 col-md-4 col-sm-4 col-xs-12 img-wrapper'>
                        <img src='' alt=''/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact