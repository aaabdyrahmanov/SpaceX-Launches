<template>
  <nuxt />
</template>

<script>

export default {
  head () {
    return {
      meta: [
        { name: 'robots', content: 'noindex nofollow' }
      ]
    }
  }
}
</script>

<style>

html {
  font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
