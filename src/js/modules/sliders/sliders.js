class Slider {
  constructor(container) {
    this.container = document.querySelector(container)
    this.slides = this.container.children
    this.slidesArr = [...this.slides]
    this.slideIndex = 1
  }
}

export default Slider
