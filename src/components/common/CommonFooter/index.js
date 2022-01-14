import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DICT } from '../../../i18n'
import './index.scss'

class CommonFooter extends Component {
  state = {
    currentNav: window.location.pathname.split('/')[1] || 'projects',
    isShowNav: false,
    isWeChat: false
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
  switchRoute = url => {
    this.setState({ currentNav: url, isShowNav: false })
  }

  render() {
    const { isShowNav, currentNav, isWeChat } = this.state
    const { language, setLang, currentLanguage } = this.props
    const dict = DICT && DICT[language]
    const grayList = ['/images', '/images/', '/video', '/video/']
    const navList = [
      {
        label: 'projects',
        value: dict && dict.NAV_TITLE_01
      },
      {
        label: 'diary',
        value: dict && dict.NAV_TITLE_02
      },
      {
        label: 'video',
        value: dict && dict.NAV_TITLE_03
      },
      {
        label: 'about',
        value: dict && dict.NAV_TITLE_04
      },
      {
        label: 'contact',
        value: dict && dict.NAV_TITLE_05
      }
    ]
    const languages = [
      {
        label: 'zh-CN',
        value: 'CN'
      },
      {
        label: 'en-US',
        value: 'US'
      }
    ]
    return (
      <div id="common-footer">
        <section
          className={`row  hidden-xs main ${
            grayList.find(i => window.location.pathname === i) ? 'bg-gray' : ''
          }`}
        >
          <div className="main-wrapper">
            <ul className="column col-lg-3 col-md-3 col-sm-3">
              <li>info</li>
              <li>
                <Link to="/about">UI、WEB Designer</Link>
              </li>
              <li>
                <Link to="/images">Photography</Link>
              </li>
            </ul>
            <ul className="column col-lg-3 col-md-3 col-sm-3">
              <li>contact</li>
              <li>vicjiangyu@gmail.com</li>
              <li>vanhatch.com</li>
            </ul>
            <ul className="column col-lg-3 col-md-3 col-sm-3">
              <li>follow</li>
              <li>
                <a
                  href="https://www.instagram.com/j.y.vic/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Instagram
                </a>
              </li>
              <li>
                <span
                  className="wechat"
                  onClick={() => {
                    this.setState({ isWeChat: true })
                  }}
                >
                  Wechat
                </span>
              </li>
              <li>
                <a
                  href="https://weibo.com/6453224041/profile?rightmod=1&wvr=6&mod=personinfo"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Weibo
                </a>
              </li>
              <li>
                <a
                  href="https://space.bilibili.com/319350209"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  bilibili
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div className="rights">
          <span>&#169; 2019 Xcontainer
            .All rights reserved. 沪ICP备19041984号</span>
          <img src="/images/footer.png" alt="" />
        </div>

        <div
          className={`wechart-modal ${isWeChat ? '' : 'hidden-modal'}`}
          onClick={() => {
            this.setState({ isWeChat: false })
          }}
        >
          <div className="box">
            <div className="wechart-content">
              <img src="/images/wechat.jpg" alt="" />
            </div>
          </div>
        </div>

        {/* 移动端导航适配 */}
        {!isShowNav && (
          <div
            className="wow fadeInUp hidden-lg hidden-md hidden-sm add"
            onClick={() => {
              this.setState({ isShowNav: true })
            }}
          >
            +
          </div>
        )}
        <div
          className={`hidden-lg hidden-md hidden-sm wow phone-nav-switch ${
            isShowNav ? 'display-block fadeInUp' : ''
          }`}
        >
          <ul className="phone-nav-ul">
            {navList.map(nav => (
              <li
                key={nav.label}
                onClick={() => this.switchRoute(nav.label)}
                className={currentNav === nav.label ? 'active' : ''}
              >
                <Link to={`/${nav.label}`}> {nav.value}</Link>
              </li>
            ))}
            {languages.map(
              locale =>
                locale.value !== currentLanguage && (
                  <li
                    key={locale.value}
                    className={`lang-li ${
                      locale.value === currentLanguage ? 'active' : ''
                    }`}
                    onClick={() => setLang(locale)}
                  >
                    {locale.value === 'CN' ? 'Chinese' : '英文'}
                  </li>
                )
            )}
            <li>
              <div
                className="close-x"
                onClick={() => {
                  this.setState({ isShowNav: false })
                }}
              >
                ×
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CommonFooter
