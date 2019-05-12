import React, {Component} from 'react'
import './index.scss'

class Home extends Component {
    render() {
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
                    <div className='row m-4'>
                        <div className='column col-lg-4 m-4 col-md-4 col-sm-4 col-xs-12'>
                            <div className="box"></div>
                        </div>
                        <div className='column col-lg-4 m-4 col-md-4 col-sm-4 col-xs-12'>
                            <div className="box"></div>
                        </div>
                        <div className='column col-lg-4 m-4 col-md-4 col-sm-4 col-xs-12'>
                            <div className="box"></div>
                        </div>
                    </div>
                    <div className='row m-4'>
                        <div className='column col-lg-4  col-md-4 col-sm-4 col-xs-12'>
                            <div className="box"></div>
                        </div>
                        <div className='column col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                            <div className="box"></div>
                        </div>
                        <div className='column col-lg-4  col-md-4 col-sm-4 col-xs-12'>
                            <div className="box"></div>
                        </div>
                    </div>
                    <div className='row m-4'>
                        <div className='column col-lg-6  col-md-6 col-sm-6 col-xs-12'>
                            <div className="box"></div>
                        </div>
                        <div className='column col-lg-6  col-md-6 col-sm-6 col-xs-12'>
                            <div className="box"></div>
                        </div>
                    </div>

                </section>
            </div>
        )
    }
}

export default Home