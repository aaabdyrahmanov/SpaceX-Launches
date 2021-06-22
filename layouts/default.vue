<template>
  <div id="app">
    <v-app id="inspire">
      <the-header />
      <nuxt />
    </v-app>
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'

export default {
  components: {
    'the-header': TheHeader
  },
  head () {
    return {
      meta: [
        { name: 'robots', content: 'noindex nofollow' }
      ]
    }
  }
}
</script>
