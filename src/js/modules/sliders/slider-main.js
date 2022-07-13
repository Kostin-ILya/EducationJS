import Slider from './slider'

class MainSlider extends Slider {
  constructor({ container, sideNextBtns, prevBtn, nextBtn }) {
    super(container)
    this.sideNextBtns = document.querySelectorAll(sideNextBtns)
    this.prevBtn = document.querySelectorAll(prevBtn)
    this.nextBtn = document.querySelectorAll(nextBtn)
  }

  render() {
    try {
      this.hansonEl = document.querySelector('.hanson')
    } catch (err) {}

    if (this.container) {
      this.showSlides(this.slideIndex)
      this.bindTriggers()
    }
  }

  bindTriggers() {
    this.sideNextBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()

        if (this.container) {
          this.changeSlides(1)
        }
      })

      btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault()
        this.slideIndex = 1
        this.showSlides(this.slideIndex)
      })
    })

    this.prevBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        this.changeSlides(-1)
      })
    })
    this.nextBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        this.changeSlides(1)
      })
    })
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
    } catch (err) {}

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
