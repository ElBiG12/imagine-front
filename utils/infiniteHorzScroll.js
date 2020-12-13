import gsap from 'gsap'

export default class InfiniteHorzScroll {
  constructor(myElement, speed = -2) {
    this.initialChildLength = myElement.children.length
    this.initialChildren = Array.from(myElement.children)
    this.myElement = myElement
    this.speed = speed
    this.timeline = gsap.timeline()
  }

  init() {
    const totalChildWidth =
      this.myElement.children[0].offsetWidth * this.initialChildLength
    const bodyWidth = window.innerWidth || document.documentElement.clientWidth

    if (totalChildWidth <= 0) {
      throw console.error(
        'You must give implicite width and height to list <li> element !'
      )
    }

    if (totalChildWidth >= bodyWidth) {
      this.itemsBlockToAdd = 1
    } else {
      this.itemsBlockToAdd = Math.ceil(bodyWidth / totalChildWidth)
    }

    this.feedWithChilds()

    this.speed < 0
      ? this.rightScroll(this.myElement)
      : this.leftScroll(this.myElement)
  }

  pause() {
    this.timeline.pause()
  }

  resume() {
    this.timeline.resume()
  }

  kill() {
    this.timeline.kill()
  }

  feedWithChilds() {
    const addItems = this.itemsBlockToAdd * 2

    let childNodes = this.initialChildren.map((el) => {
      return el.cloneNode(true)
    })

    for (let i = 1; i < addItems; i++) {
      this.myElement.prepend(...childNodes)
      childNodes = this.initialChildren.map((el) => {
        return el.cloneNode(true)
      })
    }
  }

  getSpeed(direction = 1) {
    return (
      direction *
      (this.myElement.children[this.itemsBlockToAdd * this.initialChildLength]
        .offsetLeft /
        (this.speed * 10))
    )
  }

  leftScroll() {
    const vm = this

    this.timeline.to(this.myElement, {
      x: `-${
        vm.myElement.children[vm.itemsBlockToAdd * vm.initialChildLength]
          .offsetLeft
      }px`,
      repeat: -1,
      ease: 'none',
      duration: vm.getSpeed()
    })
  }

  rightScroll() {
    const vm = this

    this.timeline.from(this.myElement, {
      x: `-${
        vm.myElement.children[vm.itemsBlockToAdd * vm.initialChildLength]
          .offsetLeft
      }px`,
      repeat: -1,
      ease: 'none',
      duration: vm.getSpeed(-1)
    })
  }
}
