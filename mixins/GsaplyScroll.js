// import { TweenLite } from 'gsap'

export default {
  data() {
    return {
      initialChildLength: 0,
      initialChildren: null,
      myElement: null,
      speed: null,
      bounding: null
    }
  },
  destroyed() {
    const vm = this
    this.Gsap.ticker.remove(vm.setScroll)
  },
  methods: {
    gsaplyScroll(myElement, speed = -2) {
      this.initialChildLength = myElement.children.length
      this.initialChildren = Array.from(myElement.children)
      this.myElement = myElement
      this.bounding = myElement.getBoundingClientRect()
      this.speed = speed
      speed > 0 ? this.rightScroll(myElement) : this.leftScroll(myElement)
    },
    leftScroll() {
      const bounding = this.myElement.getBoundingClientRect()
      // const addItems = Math.ceil(this.myElement.innerWidth / this.myElement.firstChild.offsetWidth)

      // let childNodes = this.initialChildren.map((el) => {
      //   return el.cloneNode(true)
      // })

      // while (
      //   this.myElement.offsetWidth <
      //   (window.innerWidth || document.documentElement.clientWidth) * 2
      // ) {
      //   this.myElement.appendChild(...childNodes)
      //   childNodes = this.initialChildren.map((el) => {
      //     return el.cloneNode(true)
      //   })
      // }

      if (bounding.left <= -this.myElement.firstChild.offsetWidth * 1.5) {
        this.myElement.removeChild(this.myElement.firstChild)
        console.log('Element is in the viewport!')
      } else {
        console.log('Element is NOT in the viewport!')
      }

      const vm = this
      this.Gsap.ticker.add(vm.setScroll)
    },
    rightScroll() {
      // this.myElement.style.float = 'left'
      // let childNodes = this.initialChildren.map((el) => {
      //   return el.cloneNode(true)
      // })

      const addSize = Math.ceil(
        ((window.innerWidth || document.documentElement.clientWidth) * 2) /
          (1 * this.myElement.children[0].offsetWidth)
      )
      console.log(addSize)

      // while (
      //   this.myElement.offsetWidth <
      //   (window.innerWidth || document.documentElement.clientWidth) * 2
      // ) {
      //   this.myElement.prepend(...childNodes)
      //   childNodes = this.initialChildren.map((el) => {
      //     return el.cloneNode(true)
      //   })
      //   this.bounding = this.myElement.getBoundingClientRect()
      // }

      const vm = this
      this.Gsap.ticker.add(vm.setScroll)

      // setInterval(() => {
      //   // this.Gsap.set(this.myElement, {
      //   //   // width: -vm.myElement.lastChild.offsetWidth,
      //   //   x: '+=0',
      //   //   onStart() {
      //   //   }
      //   // })
      //   vm.myElement.prepend(vm.myElement.lastChild.cloneNode(true))
      // }, 2416)
    },
    setScroll() {
      // const vm = this
      // if (vm.myElement.getBoundingClientRect().left >= 0) {
      //   // this.Gsap.set(this.myElement, {
      //   //   x: 0
      //   // })
      // } else {
      //   this.Gsap.set(this.myElement, {
      //     x: vm.speed >= 0 ? `+=${vm.speed}px` : `-=${-1 * vm.speed}px`
      //   })
      // }
    }
  }
}
