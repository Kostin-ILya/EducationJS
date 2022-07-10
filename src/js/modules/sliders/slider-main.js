import Slider from './sliders'

class MainSlider extends Slider {
  constructor({ container, nextBtns }) {
    super(container)
    this.nextBtns = document.querySelectorAll(nextBtns)
  }

  render() {
    try {
      this.hansonEl = document.querySelector('.hanson')
    } catch (error) {
      // continue regardless of error
    }

    this.nextBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        this.changeSlides(1)
      })

      btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault()
        this.slideIndex = 1
        this.showSlides(this.slideIndex)
      })
    })

    this.showSlides(this.slideIndex)
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1
    }
    if (n < 1) {
      this.slideIndex = this.slides.length
    }

    try {
      this.hansonEl.classList.add('hide', 'animated', 'fadeInUp')

      if (this.slideIndex === 3) {
        setTimeout(() => {
          this.hansonEl.classList.remove('hide')
        }, 3000)
      }
    } catch (error) {
      // continue regardless of error
    }

    this.slidesArr.forEach((slide) => {
      slide.classList.add('animated', 'fadeIn')
      slide.classList.add('hide')
    })
    this.slides[this.slideIndex - 1].classList.remove('hide')
  }

  changeSlides(n) {
    this.showSlides((this.slideIndex += n))
  }
}

export default MainSlider
