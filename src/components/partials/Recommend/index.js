import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { WOW } from "wowjs";
import './index.scss'

const worksList = [
    {
        group: [{
            img: 'images/works-27.png',
            link: '/gap'
        }, {
            img: 'images/works-28.png',
            link: '/levis'
        }, {
            img: 'images/works-29.png',
            link: '/wanhao'
        }]
    },
    {
        group: [{
            img: 'images/works-1.png',
            link: '/influence-chain'
        }, {
            img: 'images/works-2.png',
            link: '/inex'
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

class Recommend extends Component {
    componentDidMount() {
        let wow = new WOW({
            live: false
        })
        wow.init()
    }

    render() {
        let swiperList = []
        worksList && worksList.map(images => {
            images.group.map(item => {
                swiperList.push(item)
                return swiperList
            })
            return images
        })
        return (
            <div className='recommend'>
                <h2>更多</h2>
                <div className='row wow slideInRight recommend-wrapper'>
                    <div className='column col-lg-4 col-md-4 col-sm-4 hidden-xs recommend-list-pc'>
                        { swiperList.map(item => (
                            <div key={ item.img } className='wow fadeInUp recommend-item'>
                                <Link to={ item.link }><img src={ item.img } alt='' /></Link>
                            </div>
                        )) }
                    </div>

                    <div className=' column hidden-lg hidden-md hidden-sm col-xs-12 recommend-list-phone'>
                        { swiperList.map(item => (
                            <div key={ item.img } className='wow fadeInUp recommend-item'>
                                <Link to={ item.link }><img src={ item.img } alt='' /></Link>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        )
    }
}

export default Recommend