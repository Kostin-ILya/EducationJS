import MainSlider from './modules/sliders/slider-main'
import MiniSlider from './modules/sliders/slider-mini'
import VideoPlayer from './modules/videoPlayer'
import Difference from './modules/difference'

window.addEventListener('DOMContentLoaded', () => {
  const mainPageSlider = new MainSlider({
    container: '.page',
    sideNextBtns: '.sidecontrol__controls .next',
  })
  const secondPageSlider = new MainSlider({
    container: '.moduleapp',
    sideNextBtns: '.sidecontrol__controls .next',
    prevBtn: '.prevmodule',
    nextBtn: '.nextmodule',
  })
  const showUpSlider = new MiniSlider({
    container: '.showup__content-slider',
    next: '.showup__next',
    prev: '.showup__prev',
    activeClass: 'card-active',
    animateElements: true,
  })
  const modulesSlider = new MiniSlider({
    container: '.modules__content-slider',
    next: '.slick-next',
    prev: '.slick-prev',
    activeClass: 'card-active',
    animateElements: true,
    autoplay: true,
  })
  const feedSlider = new MiniSlider({
    container: '.feed__slider-container',
    next: '.feed__slider .slick-next',
    prev: '.feed__slider .slick-prev',
    activeClass: 'feed__item-active',
  })
  mainPageSlider.render()
  secondPageSlider.render()
  showUpSlider.render()
  modulesSlider.render()
  feedSlider.render()

  const oldOfficer = new Difference('.officerold', '.officer__card-item', '.plus')
  const newOfficer = new Difference('.officernew', '.officer__card-item', '.plus')
  oldOfficer.render()
  newOfficer.render()

  new VideoPlayer('.play', '.overlay').render()
})
