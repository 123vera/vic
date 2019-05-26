import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.scss'

class CommonFooter extends Component {

    render() {
        return (
            <div id='common-footer'>
                <section className='row  hidden-xs main'>
                    <div className='main-wrapper'>
                        <ul className='column col-lg-3 col-md-3 col-sm-3'>
                            <li>info</li>
                            <li><Link to='/about'>UI、WEB Designer</Link></li>
                            <li><Link to='/images'>Photography</Link></li>
                        </ul>
                        <ul className='column col-lg-3 col-md-3 col-sm-3'>
                            <li>contact</li>
                            <li>vicdesignstyle@gmail.com</li>
                            <li>vanhatch.com</li>
                        </ul>
                        <ul className='column col-lg-3 col-md-3 col-sm-3'>
                            <li>follow</li>
                            <li><a href='https://www.instagram.com/x.h.vic/'>Instagram</a></li>
                        </ul>
                    </div>

                </section>
                <div className='rights'>
                    <span>&#169; 2019 Hui Xie.All rights reserved.</span>
                    <img src='/images/footer.png' alt=""/>
                </div>
            </div>
        )
    }
}

export default CommonFooter