import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
import {DICT} from "../../../i18n";

class CommonFooter extends Component {
    state = {
        currentNav: window.location.pathname.split('/')[1] || 'projects',
        isShowNav: false
    }

    componentDidMount() {
        // 返回顶部按钮
        /* window.onscroll = () => {
            let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            let clientHeight = document.documentElement.clientHeight
            const self = this
            self.setState({isShowBack: scrollTop >= clientHeight})
        } */
    }

    componentWillUnmount() {
        window.onscroll = null
    }

    // 切换主页路由
    switchRoute = (url) => {
        this.setState({currentNav: url, isShowNav: false})
    }


    render() {
        const { isShowNav, currentNav} = this.state
        const {language} = this.props
        const dict = DICT && DICT[language]
        const grayList = ['/images', '/images/', '/video', '/video/']
        const navList = [
            {
                label: 'projects',
                value: dict && dict.NAV_TITLE_01,
            }, {
                label: 'images',
                value: dict && dict.NAV_TITLE_02,
            },
            {
                label: 'video',
                value: dict && dict.NAV_TITLE_03,
            },
            {
                label: 'about',
                value: dict && dict.NAV_TITLE_04,
            },
            {
                label: 'contact',
                value: dict && dict.NAV_TITLE_05,
            }
        ]
        return (
            <div id='common-footer'>
                <section className={`row  hidden-xs main ${grayList.find(i => window.location.pathname === i)? 'bg-gray' : ''}`}>
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
                    <span>&#169; 2019 Xie Hui.All rights reserved.</span>
                    <img src='/images/footer.png' alt=''/>
                </div>

                {/* 移动端导航适配 */}
                {!isShowNav &&
                <div
                    className='wow fadeInUp hidden-lg hidden-md hidden-sm add'
                    onClick={() => {
                        this.setState({isShowNav: true})
                    }}>+</div>
                }
                <div
                    className={`hidden-lg hidden-md hidden-sm wow phone-nav-switch ${isShowNav ? 'display-block fadeInUp' : ''}`}>
                    <ul className='phone-nav-ul'>
                        {navList.map(nav => (
                            <li
                                key={nav.label}
                                onClick={() => this.switchRoute(nav.label)}
                                className={currentNav === nav.label ? 'active' : ''}>
                                <Link to={`/${nav.label}`}> {nav.value}</Link>
                            </li>
                        ))}
                        <li>
                            <div className="close-x" onClick={() => {
                                this.setState({isShowNav: false})
                            }}>×
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}

export default CommonFooter