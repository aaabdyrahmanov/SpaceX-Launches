<template>
  <div class="title-icon">
    <v-alert
      color="rgb(87, 99, 102)"
      elevation="16"
      class="mt-8"
      dark
      icon="mdi-firework"
      dense
    >
      <span class="font-italic font-weight-thin">{{ title }}</span>
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'TitleIcon',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.title-icon {
  width: 130px;
  letter-spacing: 5px;
  margin-left: 46%;
  transform: rotate(-7deg);
}
</style>
