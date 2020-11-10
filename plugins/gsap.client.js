import Vue from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

gsap.registerPlugin(ScrollTrigger)

Object.defineProperty(Vue.prototype, 'Gsap', {
  value: gsap
})
