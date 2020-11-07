import Vue from 'vue'
import { SharedElementDirective, NuxtSharedElementRouteGuard } from 'v-shared-element'

Vue.use(SharedElementDirective, {
  // ignoreTransparency: true,
  restrictToViewport: true,
  includeChildren: true
})

export default NuxtSharedElementRouteGuard
