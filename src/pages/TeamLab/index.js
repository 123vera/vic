import React, { Component } from 'react'
import Recommend from '../../components/partials/Recommend'
import Introduce from '../../components/partials/Introduce'
// import ReactSVG from 'react-svg'
import { ensureLanguage } from '../../utils/utils'
import { DICT } from '../../i18n'
import './index.scss'

class TeamLab extends Component {
  toPlay = () => {
    //点击屏幕的时候暂停，并且图片隐藏，再次点击视频或者图片的时候播放
    let videoplay = document.getElementById('video')
    const u = navigator.userAgent
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
    if (videoplay) {
      //点击图片的时候暂停，并且使图片隐藏，再次点击视频或者图片的时候播放
      videoplay.onclick = function() {
        if (videoplay.paused) {
          videoplay.play()
          videoPalse.style.display = 'none' //播放的时候图标隐藏
        } else {
          videoplay.pause()
          videoPalse.style.display = 'block' //暂停的时候图标显示
        }
      }
      //对于ios系统播放完毕之后变黑的情况,在播放结束的时候所以要重新刷新一下src
      if (isiOS) {
        //isiOS是我设置的变量判断ios系统的常量，如果需要判断条件可以评论或者私信我
        videoplay.addEventListener('ended', function(e) {
          // 播放结束时触发的时候使播放图标显示，同时播放完之后重新加载video的src
          videoPalse.style.display = 'block'
          videoplay.src = '/video/teamlab.mp4'
        })
      }
    }
    //同样点击图标的时候也需要播放暂停，下面是对图标的处理
    let videoPalse = document.getElementById('videoPalse') //video标签
    if (videoPalse) {
      videoPalse.onclick = function() {
        if (videoplay.paused) {
          //点击视频的时候如果暂停状态，则让其播放
          videoplay.play()
          videoPalse.style.display = 'none'
        } else {
          videoplay.pause()
          videoPalse.style.display = 'block'
        }
      }
    }
  }

  render() {
    const language = ensureLanguage()
    const dict = DICT && DICT[language]
    const keyWords = {
      title: 'Video clips',
      desc: dict && dict.WORKS_TEAMLAB_DESC,
      years: '2019',
      category: dict && dict.CATEGORY_VIDEO
    }
    return (
      <div className="padding-top work-teamlab content">
        <Introduce keyWords={keyWords} />

        <div className="design-pics">
          <video
            id="video"
            type="video/mp4"
            width="100%"
            src="http://vicjiangyu.com//teamlab.mp4"
            poster="/images/team-lab.png"
            preload="none"
            controlsList="nodownload"
            playsInline={true} // 小屏播放
            webkit-playsinline="true" // ios系统下小屏播放
            x5-video-player-type="h5"
          />
          {/* <ReactSVG src='/images/video-play.svg' id="videoPalse" className='video-play' onClick={this.toPlay}/> */}
          <img
            src="/images/video-play.jpg"
            alt=""
            id="videoPalse"
            className="video-play"
            onClick={this.toPlay}
          />
        </div>
        <Recommend />
      </div>
    )
  }
}

export default TeamLab
