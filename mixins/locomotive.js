import _ from 'lodash'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

export default {
  data() {
    return {
      scrollPosition: 0,
      lmS: null,
      ST: null,
      gsapMix: null
    }
  },
  watch: {
    $route() {
      this.lmS.update()

      console.log('update loco mix')
    }
  },
  mounted() {
    console.log('mounted from loco mix')
    this.$nextTick(
      function () {
        this.gsapMix = this.Gsap
        this.lmS = new this.LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true /* if false disable overflow: hidden on html, body */,
          smoothMobile: true
        })

        window.addEventListener(
          'resize',
          _.debounce(this.onLmsResize.bind(this), 100)
        )
      }.bind(this)
    )
  },
  destroyed() {
    this.lmS.destroy()
    window.removeEventListener('resize', this.onLmsResize)
    this.gsapMix = null
    console.log('destroyed loco mix')
    // ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  },
  methods: {
    onLmsResize() {
      this.lmS.update()
    },
    initScrollerProxy() {
      const vm = this

      vm.gsapMix.registerPlugin(ScrollTrigger)
      console.log(this.gsapMix)

      ScrollTrigger.scrollerProxy(document.querySelector('.smooth-scroll'), {
        scrollTop(value) {
          // console.log('argument', arguments.length)
          return arguments.length
            ? vm.lmS.scrollTo(value, 0, 0)
            : vm.lmS.scroll.instance.scroll.y
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          }
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector('.smooth-scroll').style.transform
          ? 'transform'
          : 'fixed'
      })

      vm.lmS.on('scroll', ScrollTrigger.update)

      ScrollTrigger.addEventListener('scrollEnd', () =>
        console.log('scrolling ended!')
      )

      ScrollTrigger.addEventListener('refresh', () => vm.lmS.update())
    }
  }
}
