import { TweenLite } from 'gsap'

export default {
  data() {
    return {
      scroller: {},
      requestId: null
    }
  },
  mounted() {
    this.$nextTick(
      function () {
        const vm = this

        vm.scroller = {
          target: document.querySelector('.ic-smooth-scroll'),
          ease: 0.1, // <= scroll speed
          endY: 0,
          y: 0,
          resizeRequest: 1,
          scrollRequest: 0
        }

        TweenLite.set(vm.scroller.target, {
          rotation: 0.01,
          force3D: true
        })

        this.onLoad()
        window.addEventListener('scroll', ScrollTrigger.update)
      }.bind(this)
    )
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('scroll', ScrollTrigger.update)
    document.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onLoad() {
      this.updateScroller()
      window.focus()
      window.addEventListener('resize', this.onResize)
      document.addEventListener('scroll', this.onScroll)
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
      }
    },
    initScrollerProxy() {
      const vm = this
      // _.debounce(() => {
      ScrollTrigger.defaults({
        scroller: '.ic-smooth-scroll'
      })
      ScrollTrigger.scrollerProxy('.ic-smooth-scroll', {
        scrollTop(value) {
          // console.log(vm.asscroll.smoothScrollPos)
          return vm.scroller.y
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

      // this.asscroll.on('raf', ScrollTrigger.update)
      ScrollTrigger.addEventListener('refresh', () => this.onResize())
      // }, 100)
    }
  }
}
