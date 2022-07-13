import Slider from './slider'

class MiniSlider extends Slider {
  constructor({ container, next, prev, activeClass, animateElements = false, autoplay = false }) {
    super(container)
    this.next = document.querySelector(next)
    this.prev = document.querySelector(prev)
    this.activeClass = activeClass
    this.animateElements = animateElements
    this.autoplay = autoplay
    this.timerIntervalId = null
  }

  render() {
    try {
      this.container.classList.add('slider-mini')

      this.bindTriggers()
      this.decorizeSlides()

      if (this.autoplay) {
        this.timerIntervalId = setInterval(() => {
          this.nextSlide()
        }, 2000)

        this.container.addEventListener('mouseenter', () => {
          clearInterval(this.timerIntervalId)
        })
        this.container.addEventListener('mouseleave', () => {
          this.timerIntervalId = setInterval(() => {
            this.nextSlide()
          }, 2000)
        })
      }
    } catch (error) {}
  }

  bindTriggers() {
    this.next.addEventListener('click', () => {
      this.nextSlide()
      clearInterval(this.timerIntervalId)
    })

    this.prev.addEventListener('click', () => {
      this.container.insertBefore(this.slides[this.slides.length - 1], this.slides[0])
      this.decorizeSlides()
      clearInterval(this.timerIntervalId)
    })
  }

  nextSlide() {
    this.container.append(this.slides[0])
    this.decorizeSlides()
  }

  decorizeSlides() {
    this.slidesArr.forEach((slide) => {
      slide.classList.remove(this.activeClass)
      if (this.animateElements) {
        slide.querySelector('.card__title').classList.remove('opacity1')
        slide.querySelector('.card__controls-arrow').classList.remove('opacity1')
      }
    })
    this.slides[0].classList.add(this.activeClass)

    if (this.animateElements) {
      this.slides[0].querySelector('.card__title').classList.add('opacity1')
      this.slides[0].querySelector('.card__controls-arrow').classList.add('opacity1')
    }
  }
}

export default MiniSlider
