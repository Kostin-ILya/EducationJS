class Difference {
  constructor(container, items, trigger) {
    this.container = document.querySelector(container)
    this.items = this.container.querySelectorAll(items)
    this.btn = this.container.querySelector(trigger)
    this.count = 0
  }

  render() {
    this.hideItems()
    this.bindTrigger()
  }

  hideItems() {
    this.items.forEach((item) => {
      if (item !== this.items[this.items.length - 1]) {
        item.classList.add('hide', 'animated', 'fadeInDown')
      }
    })
  }

  bindTrigger() {
    this.btn.addEventListener('click', () => {
      if (this.count !== this.items.length - 2) {
        this.items[this.count].classList.remove('hide')
        this.count += 1
      } else {
        this.items[this.count].classList.remove('hide')
        this.items[this.items.length - 1].remove()
      }
    })
  }
}

export default Difference
