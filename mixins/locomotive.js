import _ from 'lodash'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

export default {
  data() {
    return {
      scrollPosition: 0,
      lmS: null,
      STProxy: null
    }
  },
  computed: {
    scrollY() {
      if (this.lmS == null) {
        return 0
      }
      return this.lmS.scroll.instance.scroll.y
    }
  },
  watch: {
    $route() {
      this.lmS.update()

      console.log('update loco mix')
    }
  },
  mounted() {
    this.$nextTick(
      function () {
        console.log('mounted loco mix')
        this.lmS = new this.LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true /* if false disable overflow: hidden on html, body */,
          smoothMobile: true
        })

        window.addEventListener(
          'resize',
          _.debounce(this.onLmsResize.bind(this), 100)
        )

        window.addEventListener('scroll', ScrollTrigger.update)
      }.bind(this)
    )
  },
  destroyed() {
    this.lmS.destroy()
    window.removeEventListener('resize', this.onLmsResize)
    window.removeEventListener('refresh', () => this.onLmsResize)
  },
  methods: {
    scrollTo(value) {
      if (this.lmS == null) {
        this.lmS.scrollTo(0, 0, 0)
      } else {
        this.lmS.scrollTo(value, 0, 0)
      }
    },
    onLmsResize() {
      this.lmS.update()
    },
    initScrollerProxy() {
      const vm = this

      ScrollTrigger.scrollerProxy(document.querySelector('.smooth-scroll'), {
        scrollTop(value) {
          console.log(vm.scrollY)
          return arguments.length ? vm.scrollTo(value) : vm.scrollY
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          }
        },
        pinType: document.querySelector('.smooth-scroll').style.transform
          ? 'transform'
          : 'fixed'
      })

      vm.lmS.on('scroll', ScrollTrigger.update)

      // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
      ScrollTrigger.addEventListener('refresh', () => vm.onLmsResize())

      // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
      // ScrollTrigger.refresh()

      this.lmS.update()
    }
  }
}
