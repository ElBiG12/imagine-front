import Vue from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import { Draggable } from 'gsap/Draggable.js'

gsap.registerPlugin(ScrollTrigger, Draggable)

Object.defineProperty(Vue.prototype, 'Gsap', {
  value: gsap
})

Object.defineProperty(Vue.prototype, '$smoothScrollAxies', {
  value: {
    x: 0,
    y: 0
  }
})
