import Vue from 'vue'
import $ from 'jquery'
require('jquery-simplyscroll')

Object.defineProperty(Vue.prototype, 'jQuery', {
  value: $
})
