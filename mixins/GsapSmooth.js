import { TweenLite } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

export default {
  data() {
    return {
      scroller: {},
      requestId: null,
      stRequestId: null,
      proxyInited: false
    }
  },
  updated() {
    console.log('updated')
  },
  mounted() {
    console.log('mounted')
    this.$nextTick(
      function () {
        const vm = this

        vm.scroller = {
          target: document.querySelector('.ic-smooth-scroll'),
          ease: 0.1, // <= scroll speed
          endY: 0,
          y: 0,
          resizeRequest: 1,
          scrollRequest: 0,
          sTUpdateRequest: 0
        }

        TweenLite.set(vm.scroller.target, {
          rotation: 0.01,
          force3D: true
        })

        this.onLoad()
        setTimeout(() => {
          this.onResize()
        }, 100)
      }.bind(this)
    )
  },
  destroyed() {
    if (ScrollTrigger.getAll().length > 0) {
      ScrollTrigger.getAll().forEach((element) => {
        element.kill(false)
      })
    }

    window.removeEventListener('resize', this.onResize)
    document.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('scroll', this.updateScrollTrigger)
  },
  methods: {
    onLoad() {
      window.addEventListener('resize', this.onResize)
      document.addEventListener('scroll', this.onScroll)
      document.addEventListener('scroll', this.updateScrollTrigger)
      window.focus()
      this.updateScroller()
      this.initScrollerProxy()
      this.updateScrollTrigger()
      this.onResize()
    },
    updateScroller() {
      const html = document.documentElement
      const body = document.body
      const resized = this.scroller.resizeRequest > 0

      if (resized) {
        const height = this.scroller.target.clientHeight
        body.style.height = height + 'px'
        this.scroller.resizeRequest = 0
      }

      const scrollY =
        window.pageYOffset || html.scrollTop || body.scrollTop || 0

      this.scroller.endY = scrollY
      this.scroller.y += (scrollY - this.scroller.y) * this.scroller.ease
      this.scrollAxies.y += (scrollY - this.scrollAxies.y) * this.scroller.ease

      if (Math.abs(scrollY - this.scroller.y) < 0.05 || resized) {
        this.scroller.y = scrollY
        this.scroller.scrollRequest = 0
      }

      TweenLite.set(this.scroller.target, {
        y: -this.scroller.y
      })

      this.requestId =
        this.scroller.scrollRequest > 0
          ? requestAnimationFrame(this.updateScroller)
          : null

      this.sTUpdateRequest =
        this.scroller.scrollRequest > 0
          ? requestAnimationFrame(ScrollTrigger.update)
          : null
    },
    onScroll() {
      this.scroller.scrollRequest++
      if (!this.requestId) {
        this.requestId = requestAnimationFrame(this.updateScroller)
      }
    },
    onResize() {
      this.scroller.resizeRequest++
      if (!this.requestId) {
        this.requestId = requestAnimationFrame(this.updateScroller)
        console.log('resized')
      }
    },
    updateScrollTrigger() {
      this.scroller.sTUpdateRequest++
      if (!this.stRequestId) {
        this.stRequestId = requestAnimationFrame(ScrollTrigger.update)
      }
    },
    initScrollerProxy() {
      const vm = this
      ScrollTrigger.defaults({
        scroller: '.ic-smooth-scroll',
        markers: true
      })
      ScrollTrigger.scrollerProxy('.ic-smooth-scroll', {
        scrollTop(value) {
          // console.log(vm.scrollAxies.y)
          return vm.scrollAxies.y
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

      ScrollTrigger.addEventListener('refresh', () => this.onResize())
      ScrollTrigger.refresh()
      // this.onResize()
    }
  }
}
