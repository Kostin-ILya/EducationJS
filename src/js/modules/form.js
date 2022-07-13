class Form {
  constructor(formSelector) {
    this.forms = document.querySelectorAll(formSelector)
    this.mailInputs = document.querySelectorAll('[name="email"]')
    this.messages = {
      loading: 'Loading',
      success: 'Thanks! We will contact you',
      failure: 'Oops...Something went wrong',
      spinner: 'assets/img/spinner.gif',
      ok: 'assets/img/ok.png',
      fail: 'assets/img/fail.png',
    }
    this.path = {
      server: 'assets/question.php',
    }
  }

  init() {
    this.bindForm()
    this.checkMailInputs()
    this.initPhoneMask()
  }

  bindForm() {
    this.forms.forEach((item) => {
      item.addEventListener('submit', (e) => {
        e.preventDefault()

        const statusBlock = document.createElement('div')
        const statusMessage = document.createElement('div')
        const statusImg = document.createElement('img')

        statusBlock.classList.add('status', 'animated', 'fadeInUp')
        document.querySelector('.overlay').classList.add('show')
        statusImg.src = this.messages.spinner
        statusMessage.textContent = this.messages.loading
        statusBlock.append(statusMessage)
        statusBlock.append(statusImg)
        document.querySelector('.overlay').append(statusBlock)

        const formData = new FormData(item)

        this.postData(this.path.server, formData)
          .then((data) => {
            console.log(data)

            statusImg.setAttribute('src', this.messages.ok)
            statusMessage.textContent = this.messages.success
          })
          .catch(() => {
            statusImg.setAttribute('src', this.messages.fail)
            statusMessage.textContent = this.messages.failure
          })
          .finally(() => {
            item.reset()

            setTimeout(() => {
              statusBlock.remove()
              document.querySelector('.overlay').classList.remove('show')
            }, 3000)
          })
      })
    })
  }

  async postData(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      body: data,
    })

    const result = await response.text()
    return result
  }

  checkMailInputs() {
    this.mailInputs.forEach((item) => {
      item.addEventListener('input', () => {
        item.value = item.value.replace(/[а-я]/gim, '')
      })
    })
  }

  initPhoneMask() {
    const inputs = document.querySelectorAll('[name="phone"]')

    function setCursorPosition(pos, elem) {
      elem.focus()

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos)
      } else if (elem.createTextRange) {
        const range = elem.createTextRange()

        range.collapse(true)
        range.moveEnd('character', pos)
        range.moveStart('character', pos)
        range.select()
      }
    }

    function createMask(event) {
      const matrix = '+1 (___) ___-____'
      const def = matrix.replace(/\D/g, '')
      let val = this.value.replace(/\D/g, '')
      let i = 0

      if (val.length < def.length) {
        val = def
      }

      this.value = matrix.replace(/./g, (s) =>
        /[_\d]/.test(s) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : s
      )

      if (event.type === 'blur') {
        if (this.value.length === 2) {
          this.value = ''
        }
      } else {
        setCursorPosition(this.value.length, this)
      }
    }

    inputs.forEach((item) => {
      item.addEventListener('click', createMask)
      item.addEventListener('input', createMask)
      item.addEventListener('focus', createMask)
      item.addEventListener('blur', createMask)
    })
  }
}

export default Form
