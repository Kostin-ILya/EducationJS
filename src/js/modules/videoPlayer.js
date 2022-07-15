class VideoPlayer {
  constructor(triggersSelector, overlaySelector) {
    this.btns = document.querySelectorAll(triggersSelector)
    this.overlay = document.querySelector(overlaySelector)
    this.closeBtn = this.overlay.querySelector('.close')
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this)
  }

  init() {
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
      events: {
        onStateChange: this.onPlayerStateChange,
      },
    })
  }

  onPlayerStateChange(event) {
    try {
      if (event.data === 0) {
        const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling
        const playIcon = this.activeBtn.querySelector('svg').cloneNode(true)

        blockedElem.dataset.disabled = 'false'
        blockedElem.style.opacity = '1'
        blockedElem.style.filter = 'none'
        blockedElem.querySelector('.play__text').classList.remove('attention')
        blockedElem.querySelector('.play__text').textContent = 'play video'
        blockedElem.querySelector('.play__circle').classList.remove('closed')
        blockedElem.querySelector('.play__circle svg').remove()
        blockedElem.querySelector('.play__circle').append(playIcon)
      }
    } catch (error) {}
  }

  bindTriggers() {
    this.btns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').dataset.disabled !== 'true') {
          this.overlay.classList.add('show-flex')

          this.activeBtn = btn
          this.createPlayer(btn.dataset.url)
        }
      })

      try {
        const blockedElem = btn.closest('.module__video-item').nextElementSibling
        if (i % 2 === 0) {
          blockedElem.dataset.disabled = 'true'
        }
      } catch (error) {}
    })
  }

  bindClose() {
    const closePlayer = () => {
      if (this.player) {
        try {
          this.player.stopVideo()
        } catch (error) {}

        this.overlay.classList.remove('show-flex')
        this.player.destroy()
      }
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
