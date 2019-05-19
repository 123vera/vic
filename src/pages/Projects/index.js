import React, {Component} from 'react'
import {WOW} from 'wowjs'
import './index.scss'

const worksList = [
    {
        group: [{
            img: 'images/works-1.png',
            link: '/influence-chain'
        }, {
            img: 'images/works-2.png',
            link: ''
        }, {
            img: 'images/works-3.png',
            link: '/inc-pay'
        }]
    },
    {
        group: [{
            img: 'images/works-4.png',
            link: '/design-inc'
        }, {
            img: 'images/works-5.png',
            link: '/dlab'
        }, {
            img: 'images/works-6.png',
            link: '/celebrity'
        }]
    },
    {
        group: [{
            img: 'images/works-7.png',
            link: '/teamlab'
        }, {
            img: 'images/works-8.png',
            link: '/coffee-bag'
        }]
    },
    {
        group: [{
            img: 'images/works-9.png',
            link: '/cutter'
        }, {
            img: 'images/works-10.png',
            link: '/arulai'
        }, {
            img: 'images/works-11.png',
            link: '/turnip'
        }]
    },
    {
        group: [{
            img: 'images/works-12.png',
            link: '/room'
        }, {
            img: 'images/works-13.png',
            link: '/DNA'
        }, {
            img: 'images/works-14.png',
            link: '/stec'
        }]
    },
    {
        group: [{
            img: 'images/works-15.png',
            link: '/spot'
        }, {
            img: 'images/works-16.png',
            link: '/zan'
        }, {
            img: 'images/works-17.png',
            link: '/water'
        }]
    },
    {
        group: [{
            img: 'images/works-18.png',
            link: '/poster'
        }, {
            img: 'images/works-19.png',
            link: '/gelaisi'
        }, {
            img: 'images/works-20.png',
            link: '/photo'
        }]
    },
    {
        group: [{
            img: 'images/works-21.png',
            link: '/GBIB'
        }, {
            img: 'images/works-22.png',
            link: '/ACP'
        }, {
            img: 'images/works-23.png',
            link: '/wayki'
        }]
    },
    {
        group: [{
            img: 'images/works-24.png',
            link: '/aurelia'
        }, {
            img: 'images/works-25.png',
            link: '/SFI'
        }, {
            img: 'images/works-26.png',
            link: '/new-pay'
        }]
    }
]

class Projects extends Component {
    componentDidMount() {
        let wow = new WOW({
            live: false
        })
        wow.init()
    }

    render() {
        const {history} = this.props
        return (
            <div id='home'>
                <section className='banner hidden-phone hidden-xs'>
                    <div className='banner-desc'>
                        <p>Hui Xie, UI、WEB Designer.</p>
                        <p>Provide website visual design, commercial design, improve company image.</p>
                        <p>謝輝，UI、網頁設計師。 </p>
                        <p>為公司提供網站視覺設計、商業設計、提升公司形象。</p>
                    </div>
                </section>

                <section className='wow fadeInRight container main-info'>
                    {worksList.map((works, index) => (
                        <div key={index} className='row m-4'>
                            {works && works.group.length >= 3 && works.group.map(item => (
                                <div key={item.img}
                                     className='column col-lg-4 m-4 col-md-4 col-sm-4 col-xs-12 wow fadeInUp'>
                                    <img onClick={() => {
                                        history.push(item.link)
                                    }} src={item.img} alt=''/>
                                </div>
                            ))}
                            {works && works.group.length === 2 && works && works.group.map(item => (
                                <div key={item.img}
                                     className='column col-lg-6  col-md-6 col-sm-6 col-xs-12 wow fadeInUp'>
                                    <img onClick={() => {
                                        history.push(item.link)
                                    }} src={item.img} alt=''/>
                                </div>
                            ))
                            }
                        </div>
                    ))}
                </section>
            </div>
        )
    }
}

export default Projects