class Accordion {
  constructor(triggerSelector) {
    this.btns = document.querySelectorAll(triggerSelector)
  }

  init() {
    this.bindTriggers()
  }

  bindTriggers() {
    this.btns.forEach((item) => {
      const iconCopy = item.querySelector('svg').firstElementChild.cloneNode(true)
      item.addEventListener('click', () => {
        const content = item.parentNode.nextElementSibling
        const icon = item.querySelector('svg').firstElementChild

        if (!content.classList.contains('active-class')) {
          content.classList.add('active-class')
          content.style.maxHeight = `${content.scrollHeight}px`
          icon.remove()
        } else {
          content.classList.remove('active-class')
          content.style.maxHeight = ''
          item.querySelector('svg').prepend(iconCopy)
        }
      })
    })
  }

  // bindTriggers() {
  //   this.btns.forEach((item) => {
  //     const content = item.parentNode.nextElementSibling
  //     item.addEventListener('click', () => {
  //       if (!content.classList.contains('show')) {
  //         content.classList.add('animated', 'fadeInDown', 'show')
  //       } else {
  //         content.classList.remove('show')
  //       }
  //     })
  //   })
  // }
}

export default Accordion
