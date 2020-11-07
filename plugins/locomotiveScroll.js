import Vue from 'vue'
import LocomotiveScroll from 'locomotive-scroll'

Object.defineProperty(Vue.prototype, 'LocomotiveScroll', {
  value: LocomotiveScroll
})

const locoScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  lerp: 0.1
})
console.log('From plugin', locoScroll)
