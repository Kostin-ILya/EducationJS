import Slider from './modules/sliders'
import VideoPlayer from './modules/videoPlayer'

window.addEventListener('DOMContentLoaded', () => {
  const slider = new Slider('.page', '.next')
  slider.render()

  const player = new VideoPlayer('.play', '.overlay')
  player.render()
})
