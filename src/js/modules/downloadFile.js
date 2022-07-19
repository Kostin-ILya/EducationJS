class DownloadFile {
  constructor(triggerSelector) {
    this.btns = document.querySelectorAll(triggerSelector)
  }

  init() {
    this.bindTriggers()
  }

  bindTriggers() {
    this.btns.forEach((item) => {
      item.addEventListener('click', () => {
        const link = document.createElement('a')
        link.href = 'assets/img/slide_1_m.jpg'
        link.download = ''
        link.click()
      })
    })
  }
}

export default DownloadFile
