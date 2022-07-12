class Slider {
  constructor(container) {
    try {
      this.container = document.querySelector(container)
      this.slideIndex = 1
      this.slides = this.container.children
      this.slidesArr = [...this.slides]
    } catch (error) {}
  }
}

export default Slider
