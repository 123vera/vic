import React, { Component } from 'react'
import { DICT } from '../../i18n'
import { WOW } from 'wowjs'
import { ensureLanguage } from '../../utils/utils'
import './index.scss'

class Contact extends Component {
  state = {
    isWeChat: false
  }

  componentDidMount() {
    let wow = new WOW({
      live: false
    })
    wow.init()
    this.loadMap()
  }

  loadMap = () => {
    /* eslint-disable */
    window.onLoad = function() {
      let map = new AMap.Map('map-container', {
        zoom: 16, //级别
        center: [121.489667, 31.240591], //中心点坐标
        viewMode: '3D', //使用3D视图
        mapStyle: 'amap://styles/whitesmoke'
      })
      // 添加点标记
      const marker = new AMap.Marker({
        position: [121.489667, 31.240591] //位置
      })
      map.add(marker) //添加到地图
    }
    const url =
      'https://webapi.amap.com/maps?v=1.4.14&key=f0a61556234cace773446d8d01df85d5&callback=onLoad'
    let jsapi = document.createElement('script')
    jsapi.charset = 'utf-8'
    jsapi.src = url
    document.head.appendChild(jsapi)
    /* eslint-enable */
  }

  onHandleModal = status => {
    this.setState({ isWeChat: !!(status === 'open') })
  }

  render() {
    const { isWeChat } = this.state
    const language = ensureLanguage()
    const dict = DICT && DICT[language]
    return (
      <div id="contact" className="padding-top wow fadeInRight">
        <div className="contact-wrapper">
          <ul className="msg">
            <li>vicdesignstyle@gmail.com</li>
            <li>
              <a
                href="https://www.instagram.com/j.y.vic/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Instagram
              </a>{' '}
              /
              <span
                className="wechat"
                onClick={() => this.onHandleModal('open')}
              >
                Wechat
              </span>
            </li>
            <li>
              7th Floor, Bund.27, Shanghai, China, 200002 <br />
              {dict && dict.CONTACT_ADDRESS}
            </li>
          </ul>
          <div id="map-container"></div>
        </div>
        <div
          className={`wechart-modal ${isWeChat ? '' : 'hidden-modal'}`}
          onClick={() => this.onHandleModal('close')}
        >
          <div className="box">
            <div className="wechart-content">
              <img src="/images/wechat.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
