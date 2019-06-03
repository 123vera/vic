import React, { Component, useState } from 'react'
import { WOW } from 'wowjs'
import ReactSVG from 'react-svg'
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full'
import { Navigation } from 'swiper/dist/js/swiper.esm'
import './index.scss'

const imagesList = [
  {
    group: [
      '/images/images-1.jpg',
      '/images/images-2.jpg',
      '/images/images-3.jpg',
      '/images/images-4.jpeg'
    ]
  },
  {
    group: [
      '/images/images-5.jpg',
      '/images/images-6.jpeg',
      '/images/images-7.jpg',
      '/images/images-8.jpg'
    ]
  },
  {
    group: [
      '/images/images-9.jpg',
      '/images/images-10.jpeg',
      '/images/images-11.jpg',
      '/images/images-12.jpeg'
    ]
  },
  {
    group: [
      '/images/images-13.jpg',
      '/images/images-14.jpg',
      '/images/images-15.jpeg',
      '/images/images-16.jpeg'
    ]
  },
  {
    group: [
      '/images/images-17.jpeg',
      '/images/images-18.jpeg',
      '/images/images-19.jpg',
      '/images/images-20.jpeg'
    ]
  },
  {
    group: [
      '/images/images-21.jpg',
      '/images/images-22.jpg',
      '/images/images-23.jpeg',
      '/images/images-24.jpeg'
    ]
  },
  {
    group: [
      '/images/images-25.jpg',
      '/images/images-26.jpeg',
      '/images/images-27.jpeg',
      '/images/images-28.jpeg'
    ]
  },
  {
    group: [
      '/images/images-29.jpg',
      '/images/images-30.jpeg',
      '/images/images-31.jpeg',
      '/images/images-32.jpeg'
    ]
  },
  {
    group: [
      '/images/images-33.jpeg',
      '/images/images-34.jpeg',
      '/images/images-35.jpeg',
      '/images/images-36.jpeg'
    ]
  },
  {
    group: [
      '/images/images-37.jpeg',
      '/images/images-38.jpeg',
      '/images/images-39.jpeg',
      '/images/images-40.jpeg'
    ]
  },
  {
    group: [
      '/images/images-41.jpeg',
      '/images/images-42.jpg',
      '/images/images-43.jpeg',
      '/images/images-44.jpg'
    ]
  },
  {
    group: [
      '/images/images-45.jpg',
      '/images/images-46.jpg',
      '/images/images-47.jpeg',
      '/images/images-48.jpg'
    ]
  }
]

let swiperList = []
imagesList.map(images => {
  images.group.map(item => {
    swiperList.push(item)
    return swiperList
  })
  return images
})

const SimpleSwiper = props => {
  const [swiper, updateSwiper] = useState(null)

  const goNext = e => {
    e.stopPropagation()
    if (swiper !== null) {
      swiper.slideNext()
    }
  }

  const goPrev = e => {
    e.stopPropagation()

    if (swiper !== null) {
      swiper.slidePrev()
    }
  }

  return (
    <div className="row swiper-box">
      <button className="pre" onClick={goPrev}>
        {' '}
        &gt;{' '}
      </button>
      <Swiper
        key={new Date()}
        initialSlide={props.currSlide}
        getSwiper={updateSwiper}
        modules={[Navigation]}
      >
        {swiperList.map(item => (
          <div key={item} className="row img-box">
            <div className="column col-lg-12  col-md-12 col-sm-12 col-xs-12">
              <img width="100%" alt="" className="img-swiper" src={item} />
            </div>
          </div>
        ))}
      </Swiper>
      <button className="next" onClick={goNext}>
        {' '}
        &lt;{' '}
      </button>
    </div>
  )
}

class Images extends Component {
  state = {
    isShowModel: false,
    currSlide: 0
  }

  componentDidMount() {
    let wow = new WOW({
      live: false
    })
    wow.init()
  }

  toViewModel = item => {
    const number = swiperList.findIndex(image => item === image) || 0
    this.setState({ isShowModel: true, currSlide: number })
  }

  render() {
    const { isShowModel, currSlide } = this.state

    return (
      <div id="images" className="padding-top">
        <section className="images-wrapper">
          {imagesList.map((images, index) => (
            <div key={index} className="row m-4">
              {images &&
                images.group.map((item, i) => (
                  <div
                    onClick={() => this.toViewModel(item)}
                    key={i}
                    className="column col-lg-3  col-md-3 col-sm-3 col-xs-12"
                  >
                    <img className="wow fadeInRight box" src={item} alt="" />
                  </div>
                ))}
            </div>
          ))}
        </section>
        <div
          className={[`modal-swiper  ${isShowModel ? '' : 'display-none'}`]}
          onClick={e => {
            this.setState({ isShowModel: false })
          }}
        >
          <span
            className="close-swiper"
            onClick={() => {
              this.setState({ isShowModel: false })
            }}
          >
            <img src="/images/close-swiper.jpg" alt="" />
          </span>
          <SimpleSwiper currSlide={currSlide} />
        </div>
      </div>
    )
  }
}

export default Images
