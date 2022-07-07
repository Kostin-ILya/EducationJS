class Slider {
  constructor(page, btns) {
    this.page = document.querySelector(page)
    this.slides = this.page.children
    this.btns = document.querySelectorAll(btns)
    this.slideIndex = 1
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

    this.slides.forEach((slide) => {
      slide.classList.add('animated', 'fadeIn')
      slide.classList.add('hide')
    })
    this.slides[this.slideIndex - 1].classList.remove('hide')
  }

  changeSlides(n) {
    this.showSlides((this.slideIndex += n))
  }

  render() {
    try {
      this.hansonEl = document.querySelector('.hanson')
    } catch (error) {
      // continue regardless of error
    }

    this.btns.forEach((btn) => {
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
}

export default Slider
