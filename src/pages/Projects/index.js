import React, {Component} from 'react'
import {WOW} from 'wowjs'
import './index.scss'

const worksList = [
    {
        group: [{
            img: 'images/works-1.png',
            link: '/influence-chain',
            name: 'Influence chain',
        }, {
            img: 'images/works-2.png',
            link: '/inex',
            name: 'INEX'
        }, {
            img: 'images/works-3.png',
            link: '/inc-pay',
            name: 'INC PAY'
        }]
    },
    {
        group: [{
            img: 'images/works-4.png',
            link: '/design-inc',
            name: '影鏈'
        }, {
            img: 'images/works-5.png',
            link: '/dlab',
            name: 'Dlab'
        }, {
            img: 'images/works-6.png',
            link: '/celebrity',
            name: '紅人'
        }]
    },
    {
        group: [{
            img: 'images/works-7.png',
            link: '/teamlab',
            name: 'Teamlab'
        }, {
            img: 'images/works-8.png',
            link: '/coffee-bag',
            name: '咖啡包'
        }]
    },
    {
        group: [{
            img: 'images/works-9.png',
            link: '/cutter',
            name: 'Cutter'
        }, {
            img: 'images/works-10.png',
            link: '/arulai',
            name: '阿如来'
        }, {
            img: 'images/works-11.png',
            link: '/turnip',
            name: '芜菁'
        }]
    },
    {
        group: [{
            img: 'images/works-12.png',
            link: '/room',
            name: 'Room'
        }, {
            img: 'images/works-13.png',
            link: '/DNA',
            name: 'DNA'
        }, {
            img: 'images/works-14.png',
            link: '/stec',
            name: 'STEC'
        }]
    },
    {
        group: [{
            img: 'images/works-15.png',
            link: '/spot',
            name: '现货'
        }, {
            img: 'images/works-16.png',
            link: '/zan',
            name: 'Zan'
        }, {
            img: 'images/works-17.png',
            link: '/water',
            name: 'Water'
        }]
    },
    {
        group: [{
            img: 'images/works-18.png',
            link: '/poster',
            name: 'Poster'
        }, {
            img: 'images/works-19.png',
            link: '/gelaisi',
            name: '格莱'
        }, {
            img: 'images/works-20.png',
            link: '/photo',
            name: 'Photograph'
        }]
    },
    {
        group: [{
            img: 'images/works-21.png',
            link: '/GBIB',
            name: 'GBIB'
        }, {
            img: 'images/works-22.png',
            link: '/ACP',
            name: 'ACP'
        }, {
            img: 'images/works-23.png',
            link: '/wayki',
            name: '維基'
        }]
    },
    {
        group: [{
            img: 'images/works-24.png',
            link: '/aurelia',
            name: 'Web'
        }, {
            img: 'images/works-25.png',
            link: '/SFI',
            name: 'SFI'
        }, {
            img: 'images/works-26.png',
            link: '/new-pay',
            name: '新貝'
        }]
    }
]

class Projects extends Component {
    state = {
        size: 3,
        scrollBarTop: 0,
        scrollBarColor: '#fff',
        scrollBarBgColor: 'rgba(255, 255, 255, 0.2)'
    }

    componentDidMount() {
        let wow = new WOW({
            live: false
        })
        const clientHeight = document.body.clientHeight  // 页面高度
        let barTop = 0
        wow.init()
        this.initAnimate()

        window.onscroll = () => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滚动高度
            if (scrollTop >= clientHeight) return
            barTop = ((420 - 70) * (scrollTop / clientHeight))
            this.setState({
                scrollBarTop: barTop,
                scrollBarColor: barTop >= 100 ? '#333' : '#fff',
                scrollBarBgColor: barTop >= 100 ? 'rgba(0,0,0,0.2)' : 'rgba(255, 255, 255, 0.1)'
            })
        }
    }

    initAnimate = () => {
        let screenWidth, screenHeight, smallerSize;
        const container = document.querySelector('#container')

        const Z_RANGE = 1000; // How deep
        const Z_VELOCITY = -0.0045; // How fast
        const STARS_COUNT = 2000; // How many

        const setSizes = () => {
            screenWidth = window.innerWidth;
            screenHeight = 724;
            smallerSize = screenWidth > screenHeight ? screenHeight : screenWidth;
        }

        setSizes();

        const HOLE = {
            x: screenWidth / 2,
            y: screenHeight / 2,
            r: smallerSize / 3.2
        };

        class Star {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = 1 - Math.random() * 2;
                this.y = 1 - Math.random() * 2;
                this.z = Math.random() * -Z_RANGE;
                this.xPos = 0;
                this.yPos = 0;
                this.angle = 0.001;
            };

            getPosition() {
                this.x = this.x * Math.cos(this.angle) - this.y * Math.sin(this.angle);
                this.y = this.y * Math.cos(this.angle) + this.x * Math.sin(this.angle);
                this.z += Z_VELOCITY;

                this.xPos =
                    screenHeight / screenWidth * screenWidth * this.x / this.z +
                    screenWidth / 2;
                this.yPos = screenHeight * this.y / this.z + screenHeight / 2;

                // Detect collision with black hole
                if (Math.sqrt((this.xPos - HOLE.x) * (this.xPos - HOLE.x) + (this.yPos - HOLE.y) * (this.yPos - HOLE.y)) <= HOLE.r || this.z >= Z_RANGE) this.reset();
            };

            draw() {
                const size = 3 - -this.z / 2;

                ctx.globalAlpha = (Z_RANGE + this.z) / (Z_RANGE * 2);
                ctx.fillStyle = "white";
                ctx.fillRect(this.xPos, this.yPos, size, size);
                ctx.globalAlpha = 1;
            };
        }

        const stars = new Array(STARS_COUNT);

        for (let i = 0; i < STARS_COUNT; i++) stars[i] = new Star();

        const canvas = document.createElement("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        container.appendChild(canvas)

        const ctx = canvas.getContext("2d");

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.fillStyle = "white";
            stars.forEach(star => {
                star.getPosition();
                star.draw();
            });
            ctx.fill();

            requestAnimationFrame(animate);
        }
        window.addEventListener('resize', e => {
            setSizes();
            canvas.width = screenWidth;
            canvas.height = screenHeight;
            HOLE.r = smallerSize / 4;
            HOLE.x = screenWidth / 2;
            HOLE.y = screenHeight / 2;
        });
        animate();
    }

    render() {
        const {history} = this.props
        const {scrollBarTop, scrollBarColor, scrollBarBgColor} = this.state
        return (
            <div id='home'>
                <section className='banner hidden-phone'>
                    <div id="container"/>
                    <div className='row banner-desc'>
                        <p>
                            <span className='split-part'
                                  style={{transitionDelay: '2310ms'}}>Xie Hui, </span>
                            <span className='split-part'
                                  style={{transitionDelay: '10760ms'}}>UI、WEB Designer. </span>
                            <span className='split-part'
                                  style={{transitionDelay: '8910ms'}}>Provide </span>
                            <span className='split-part'
                                  style={{transitionDelay: '20880ms'}}>website </span>
                            <span className='split-part'
                                  style={{transitionDelay: '170ms'}}>visual </span>
                            <span className='split-part'
                                  style={{transitionDelay: '160ms'}}>design, </span>
                            <span className='split-part'
                                  style={{transitionDelay: '80ms'}}>commercial </span>
                            <span className='split-part'
                                  style={{transitionDelay: '140ms'}}>design, </span>
                            <span className='split-part'
                                  style={{transitionDelay: '30ms'}}>improve </span>
                            <span className='split-part'
                                  style={{transitionDelay: '90ms'}}>company </span>
                            <span className='split-part'
                                  style={{transitionDelay: '150ms'}}>image. </span>
                        </p>
                        <p>
                            <span className='split-part'
                                  style={{transitionDelay: '8910ms'}}>謝輝，</span>
                            <span className='split-part'
                                  style={{transitionDelay: '20880ms'}}>UI、網頁設計師。</span>
                            <span className='split-part'
                                  style={{transitionDelay: '160ms'}}>為公司</span>
                            <span className='split-part'
                                  style={{transitionDelay: '80ms'}}>提供</span>
                            <span className='split-part'
                                  style={{transitionDelay: '140ms'}}>網站</span>
                            <span className='split-part'
                                  style={{transitionDelay: '30ms'}}>視覺設計、</span>
                            <span className='split-part'
                                  style={{transitionDelay: '90ms'}}>商業設計、</span>
                            <span className='split-part'
                                  style={{transitionDelay: '150ms'}}>提升公司形象。</span>
                        </p>
                    </div>
                    <aside className='hidden-xs'>
                        <button className='pre'>&gt;</button>
                        <div className='scroll-main' style={{background: scrollBarBgColor}}>
                            <div className='scroll-bar' style={{top: scrollBarTop, background: scrollBarColor}}/>
                        </div>
                        <button className='next'>&lt;</button>
                    </aside>
                </section>

                <section className='wow fadeInRight container main-info'>
                    <div className='main-info_wrapper'>
                        {worksList.map((works, index) => (
                            <div key={index} className='row m-4'>
                                {works && works.group.length >= 3 && works.group.map(item => (
                                    <div key={item.img}
                                         className='column col-lg-4 m-4 col-md-4 col-sm-4 col-xs-12 wow fadeInUp img-box'
                                         onClick={() => {
                                             history.push(item.link)
                                         }}>
                                        <img src={item.img} alt=''/>
                                        <div className='img-shadow'>
                                            {item.name}
                                        </div>
                                    </div>
                                ))}
                                {works && works.group.length === 2 && works && works.group.map(item => (
                                    <div key={item.img}
                                         className='column col-lg-6  col-md-6 col-sm-6 col-xs-12 wow fadeInUp img-box'
                                         onClick={() => {
                                             history.push(item.link)
                                         }}>
                                        <img src={item.img} alt=''/>
                                        <div className='img-shadow'>
                                            {item.name}
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        )
    }
}

export default Projects