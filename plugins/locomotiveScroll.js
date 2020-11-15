import Vue from 'vue'
import locomotiveScroll from 'locomotive-scroll'
// import LocomotiveScroll from 'locomotive-scroll'
// import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

// const locomotiveScroll = new LocomotiveScroll({
//   el: document.querySelector('.ic-smooth-scroll'),
//   smooth: true /* if false disable overflow: hidden on html, body */,
//   smoothMobile: true
// })

// window.addEventListener('resize', locomotiveScroll.update())

// locomotiveScroll.on('scroll', ScrollTrigger.update)

// ScrollTrigger.defaults({
//   scroller: '.ic-smooth-scroll'
// })

// ScrollTrigger.scrollerProxy('.ic-smooth-scroll', {
//   scrollTop(value) {
//     console.log(locomotiveScroll.scrollY)
//     return arguments.length
//       ? locomotiveScroll.scrollTo(value)
//       : locomotiveScroll.scrollY
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     }
//   },
//   pinType: document.querySelector('.ic-smooth-scroll').style.transform
//     ? 'transform'
//     : 'fixed'
// })

Object.defineProperty(Vue.prototype, 'LocomotiveScroll', {
  value: locomotiveScroll
})
