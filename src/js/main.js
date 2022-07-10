import MainSlider from './modules/sliders/slider-main'
import MiniSlider from './modules/sliders/slider-mini'
import VideoPlayer from './modules/videoPlayer'

window.addEventListener('DOMContentLoaded', () => {
  const mainSlider = new MainSlider({ container: '.page', nextBtns: '.next' })
  mainSlider.render()

  const showUpSlider = new MiniSlider({
    container: '.showup__content-slider',
    next: '.showup__next',
    prev: '.showup__prev',
    activeClass: 'card-active',
    animateElements: true,
  })
  showUpSlider.render()

  const modulesSlider = new MiniSlider({
    container: '.modules__content-slider',
    next: '.slick-next',
    prev: '.slick-prev',
    activeClass: 'card-active',
    animateElements: true,
    autoplay: true,
  })
  modulesSlider.render()

  const feedSlider = new MiniSlider({
    container: '.feed__slider-container',
    next: '.feed__slider .slick-next',
    prev: '.feed__slider .slick-prev',
    activeClass: 'feed__item-active',
  })
  feedSlider.render()

  const player = new VideoPlayer('.play', '.overlay')
  player.render()
})
