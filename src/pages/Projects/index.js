import React, {Component} from 'react'
import './index.scss'

const worksList = [
    {
        group: [{
            img: 'images/works-1.png',
            link: '/influence-chain'
        }, {
            img: 'images/works-2.png',
            link: '/influence-chain'
        }, {
            img: 'images/works-3.png',
            link: '/influence-chain'
        }]
    },
    {
        group: [{
            img: 'images/works-4.png',
            link: '/influence-chain'
        }, {
            img: 'images/works-5.png',
            link: '/influence-chain'
        }, {
            img: 'images/works-6.png',
            link: '/influence-chain'
        }]
    },
    {
        group: [{
            img: 'images/works-7.png',
            link: '/influence-chain'
        }, {
            img: 'images/works-8.png',
            link: '/influence-chain'
        }]
    },
    {
        group: [{
            img: 'images/works-9.png',
            link: '/influence-chain'
        }, {
            img: 'images/works-10.png',
            link: '/influence-chain'
        }, {
            img: 'images/works-11.png',
            link: '/influence-chain'
        }]
    },
    {
        group: [{
            img: 'images/works-12.png',
            link: '/influence-chain'
        }, {
            img: 'images/works-13.png',
            link: '/influence-chain'
        }, {
            img: 'images/works-14.png',
            link: '/influence-chain'
        }]
    },
    {
        group: [{
            img: 'images/works-15.png',
            link: '/influence-chain'
        }, {
            img: 'images/works-16.png',
            link: '/influence-chain'
        }, {
            img: 'images/works-17.png',
            link: '/influence-chain'
        }]
    },
    {
        group: [{
            img: 'images/works-18.png',
            link: '/influence-chain'
        }, {
            img: 'images/works-19.png',
            link: '/influence-chain'
        }, {
            img: 'images/works-20.png',
            link: '/influence-chain'
        }]
    },
    {
        group: [{
            img: 'images/works-21.png',
            link: '/influence-chain'
        }, {
            img: 'images/works-22.png',
            link: '/influence-chain'
        }, {
            img: 'images/works-23.png',
            link: '/influence-chain'
        }]
    },
    {
        group: [{
            img: 'images/works-24.png',
            link: '/influence-chain'
        }, {
            img: 'images/works-25.png',
            link: '/influence-chain'
        }, {
            img: 'images/works-26.png',
            link: '/influence-chain'
        }]
    }
]

class Projects extends Component {
    render() {
        const {history} = this.props
        return (
            <div id='home'>
                <section className='banner hidden-phone'>
                    <div className='banner-desc'>
                        <p>Hui Xie, UI、WEB Designer.</p>
                        <p>Provide website visual design, commercial design, improve company image.</p>
                        <p>謝輝，UI、網頁設計師。 </p>
                        <p>為公司提供網站視覺設計、商業設計、提升公司形象。</p>
                    </div>
                </section>

                <section className='container main-info'>
                    {worksList.map((works, index) => (
                        <div key={index} className='row m-4'>
                            {works && works.group.length >= 3 && works.group.map(item => (
                                <div key={item.img} className='column col-lg-4 m-4 col-md-4 col-sm-4 col-xs-12'>
                                    <img onClick={() => {
                                        history.push(item.link)
                                    }} src={item.img} alt=''/>
                                </div>
                            ))}
                            {works && works.group.length === 2 && works && works.group.map(item => (
                                <div key={item.img} className='column col-lg-6  col-md-6 col-sm-6 col-xs-12'>
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