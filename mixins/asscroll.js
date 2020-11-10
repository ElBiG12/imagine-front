// import _ from 'lodash'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

export default {
  data() {
    return {
      asscroll: null
    }
  },
  mounted() {
    this.$nextTick(
      function () {
        // console.log(this.ASScroll.default())
        this.asscroll = new this.ASScroll({
          customScrollbar: true
          // disableRaf: true
        })

        // this.Gsap.ticker.add(this.asscroll.onRaf)

        this.asscroll.enable()
        // window.addEventListener('scroll', ScrollTrigger.update)
      }.bind(this)
    )
  },
  destroyed() {
    this.asscroll.off('raf', ScrollTrigger.update)
    ScrollTrigger.removeEventListener('refresh', () => this.asscroll.onResize())
  },
  methods: {
    initScrollerProxy() {
      const vm = this
      ScrollTrigger.defaults({
        scroller: '.ic-smooth-scroll'
      })
      ScrollTrigger.scrollerProxy('.ic-smooth-scroll', {
        scrollTop(value) {
          return arguments.length
            ? vm.asscroll.scrollTo(value)
            : -vm.asscroll.smoothScrollPos
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          }
        }
      })

      this.asscroll.on('raf', ScrollTrigger.update)
      ScrollTrigger.addEventListener('refresh', () => this.asscroll.onResize())
    }
  }
}
