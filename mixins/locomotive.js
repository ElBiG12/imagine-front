import _ from 'lodash'

export default {
  data () {
    return {
      scrollPosition: 0
    }
  },
  watch: {
    $route () {
      this.lmS.update()
    }
  },
  mounted () {
    this.$nextTick(
      function () {
        this.lmS = new this.LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true /* if false disable overflow: hidden on html, body */
        })

        window.addEventListener(
          'resize',
          _.debounce(this.onLmsResize.bind(this), 100)
        )
      }.bind(this)
    )
  },
  destroyed () {
    this.lmS.destroy()
    window.removeEventListener('resize', this.onLmsResize)
  },
  methods: {
    onLmsResize () {
      this.lmS.update()
    }
  }
}
