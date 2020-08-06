<template>
  <div class="wrap">
    <div class="logo mb">
      <img src="404.png" alt="Page not Found" />
      <p>
        <nuxt-link to="/" class="btn">Go back to Home</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: this.message
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message
    }
  }
}
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}
.logo {
  width: 430px;
  margin: 0 auto;
  padding-top: 14em;
}
p {
  color: #eee;
  font-size: 13px;
  margin-left: 30px;
  padding: 5px;
  background-color: #9ebbc9;
  color: #ffffff;
  text-decoration: none;
  -webkit-border-radius: 0.3em;
  -moz-border-radius: 0.3em;
  border-radius: 0.3em;
}
p:hover {
  color: #fff;
  text-decoration: none;
}
@media (max-width: 991px) {
  .wrap {
    margin: 0px auto;
    width: 897px;
  }
}
@media (max-width: 900px) {
  .wrap {
    margin: 0px auto;
    width: 820px;
  }
}
@media (max-width: 800px) {
  .wrap {
    margin: 0px auto;
    width: 700px;
  }
}
@media (max-width: 736px) {
  .wrap {
    margin: 0px auto;
    width: 627px;
  }
}
@media (max-width: 667px) {
  .wrap {
    margin: 0px auto;
    width: 600px;
  }
}
@media (max-width: 640px) {
  .wrap {
    margin: 0px auto;
    width: 570px;
  }
}
@media (max-width: 600px) {
  .wrap {
    margin: 0px auto;
    width: 458px;
  }
}
@media (max-width: 480px) {
  .wrap {
    margin: 0px auto;
    width: 375px;
  }
}
@media (max-width: 414px) {
  .wrap {
    margin: 0px auto;
    width: 357px;
  }
}
@media (max-width: 384px) {
  .wrap {
    margin: 0px auto;
    width: 363px;
  }
}
@media (max-width: 375px) {
  .wrap {
    margin: 0px auto;
    width: 337px;
  }
}
@media (max-width: 320px) {
  .wrap {
    margin: 0px auto;
    width: 285px;
  }
}
</style>
