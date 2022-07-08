class VideoPlayer {
  constructor(triggersSelector, overlaySelector) {
    this.btns = document.querySelectorAll(triggersSelector)
    this.overlay = document.querySelector(overlaySelector)
    this.closeBtn = this.overlay.querySelector('.close')
  }

  render() {
    const tag = document.createElement('script')
    const firstScriptTag = document.getElementsByTagName('script')[0]
    tag.src = 'https://www.youtube.com/iframe_api'
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    this.bindTriggers()
    this.bindClose()
  }

  createPlayer(url) {
    this.player = new YT.Player('iframe', {
      height: '100%',
      width: '100%',
      videoId: url,
    })
  }

  bindTriggers() {
    this.btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.overlay.classList.add('show-flex')

        const path = btn.dataset.url
        this.createPlayer(path)
      })
    })
  }

  bindClose() {
    const closePlayer = () => {
      this.overlay.classList.remove('show-flex')
      this.player.stopVideo()

      this.overlay.innerHTML = `
        <div class="video">
        <div id="iframe"></div>
        <div class="close">&times;
        </div>    
      `
    }

    this.closeBtn.addEventListener('click', () => {
      closePlayer()
    })
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        closePlayer()
      }
    })
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && this.overlay.classList.contains('show-flex')) {
        closePlayer()
      }
    })
  }
}

export default VideoPlayer
