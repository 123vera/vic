import React, {Component} from 'react'
import './index.scss'

const imagesList = [
    {group: ['/images/works-1.png', '/images/works-2.png', '/images/works-3.png', '/images/works-3.png']},
    {group: ['/images/works-4.png', '/images/works-5.png', '/images/works-6.png', '/images/works-6.png']},
    {group: ['/images/works-7.png', '/images/works-8.png', '/images/works-7.png', '/images/works-8.png']},
    {group: ['/images/works-1.png', '/images/works-2.png', '/images/works-3.png', '/images/works-3.png']},
    {group: ['/images/works-4.png', '/images/works-5.png', '/images/works-6.png', '/images/works-6.png']},
    {group: ['/images/works-7.png', '/images/works-8.png', '/images/works-7.png', '/images/works-8.png']},
    {group: ['/images/works-1.png', '/images/works-2.png', '/images/works-3.png', '/images/works-3.png']},
    {group: ['/images/works-4.png', '/images/works-5.png', '/images/works-6.png', '/images/works-6.png']},
    {group: ['/images/works-7.png', '/images/works-8.png', '/images/works-7.png', '/images/works-8.png']}
]

class Images extends Component {
    render() {
        return (
            <div id='images'>
                <section className='images-wrapper'>
                    {
                        imagesList.map((images, index) => (
                            <div key={index} className='row m-4'>
                                {images && images.group.map((item, i) => (
                                    <div key={i} className='column col-lg-3  col-md-3 col-sm-3 col-xs-12'>
                                        <img className='box' src={item} alt=''/>
                                    </div>
                                ))}
                            </div>
                        ))
                    }
                    <div className='row m-4'>
                        <div className='column col-lg-3  col-md-3 col-sm-3 col-xs-12'>
                            <div className='box'></div>
                        </div>
                        <div className='column col-lg-3  col-md-3 col-sm-3 col-xs-12'>
                            <div className='box'/>
                        </div>
                        <div className='column col-lg-3  col-md-3 col-sm-3 col-xs-12'>
                            <div className='box'></div>
                        </div>
                        <div className='column col-lg-3  col-md-3 col-sm-3 col-xs-12'>

                            <div className='box'></div>
                        </div>
                    </div>
                    <div className='row m-4'>
                        <div className='column col-lg-3  col-md-3 col-sm-3 col-xs-12'>
                            <div className='box'></div>
                        </div>
                        <div className='column col-lg-3  col-md-3 col-sm-3 col-xs-12'>
                            <div className='box'/>
                        </div>
                        <div className='column col-lg-3  col-md-3 col-sm-3 col-xs-12'>
                            <div className='box'></div>
                        </div>
                        <div className='column col-lg-3  col-md-3 col-sm-3 col-xs-12'>

                            <div className='box'></div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Images
