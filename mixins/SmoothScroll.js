import _ from 'lodash'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

export default {
  data() {
    return {
      lmS: null,
      lmSMobile: null,
      totalOffset: 0
    }
  },
  watch: {
    '$LmsState.isMobileNavOpen': 'handleMobileNavState'
  },
  mounted() {
    this.$nextTick(
      function () {
        const vm = this
        vm.$LmsState.isMobileNavOpen = false
        vm.initPageSmoothScroll()
      }.bind(this)
    )
  },
  beforeDestroy() {
    this.destroyPagesSmoothScroll()
  },
  methods: {
    handleMobileNavState(nVal) {
      if (nVal) {
        this.lmS.stop()
        document.querySelector('.page-scrollbar').style.opacity = 0
        this.lmSMobile = new this.LocomotiveScroll({
          el: document.querySelector('#mobile_nav'),
          smooth: true,
          tablet: {
            smooth: true
          },
          smartphone: {
            smooth: true
          }
        })
      } else {
        this.lmS.start()
        document.querySelector('.page-scrollbar').style.opacity = 1
        if (this.lmSMobile) {
          this.lmSMobile.destroy()
        }
      }
    },
    initPageSmoothScroll() {
      const vm = this

      vm.totalOffset = document.body.scrollHeight

      vm.lmS = new vm.LocomotiveScroll({
        el: document.querySelector('.ic-smooth-scroll'),
        smooth: true,
        tablet: {
          smooth: true
        },
        smartphone: {
          smooth: true
        },
        scrollbarClass: 'page-scrollbar'
      })

      document.querySelector('.page-scrollbar').style.opacity = 1

      vm.initScrollerProxy()

      vm.Gsap.ticker.add(vm.doubleRsizeCheck)
    },
    destroyPagesSmoothScroll() {
      this.lmS.destroy()
      ScrollTrigger.removeEventListener(
        'refresh',
        _.debounce(this.onLmsResize.bind(this), 100)
      )

      if (ScrollTrigger.getAll().length > 0) {
        ScrollTrigger.getAll().forEach((element) => {
          element.kill(false)
        })
      }

      this.Gsap.ticker.remove(this.doubleRsizeCheck)
    },
    scrollTo(value) {
      if (this.lmS == null) {
        this.lmS.scrollTo(0, 0, 0)
      } else {
        this.lmS.scrollTo(value, 0, 0)
      }
    },
    doubleRsizeCheck() {
      const totalOffset = document.body.scrollHeight
      try {
        if (totalOffset !== this.totalOffset) {
          this.lmS.update()
          this.totalOffset = totalOffset
          console.log('double check resize')
        }
      } catch {}
    },
    onLmsResize() {
      this.lmS.update()
    },
    scrollerProxy() {
      this.$smoothScrollAxies.y = this.lmS.scroll.instance.scroll.y
    },
    initScrollerProxy() {
      const vm = this

      const ST = ScrollTrigger
      ST.defaults({
        scroller: '.ic-smooth-scroll'
      })

      ScrollTrigger.scrollerProxy('.ic-smooth-scroll', {
        scrollTop(value) {
          return arguments.length ? vm.scrollTo(value) : vm.$smoothScrollAxies.y
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          }
        },
        pinType: document.querySelector('.ic-smooth-scroll').style.transform
          ? 'transform'
          : 'fixed'
      })

      vm.lmS.on('scroll', vm.scrollerProxy)
      vm.lmS.on('scroll', ScrollTrigger.update)

      // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
      ScrollTrigger.addEventListener('refresh', () =>
        _.debounce(this.onLmsResize.bind(this), 100)
      )

      // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
      // ScrollTrigger.refresh()

      vm.lmS.update()
    }
  }
}
