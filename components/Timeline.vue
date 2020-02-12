<template>
  <div>
    <v-timeline class="pl-2 pr-2">
      <v-timeline-item
        v-for="(mission, index) in data.missionName.length"
        :key="index"
        large
      >
        <template v-slot:icon>
          <v-avatar>
            <img :src="data.rocketIcon[index]" />
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>{{ data.rocketNationality[index] }}</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">
            <div class="mission-name">
              {{ data.missionName[index] }}
            </div>
            |
            <div v-if="data.launchSuccess[index] === true" class="success-msg">
              <i class="fa fa-check"></i>
            </div>
            <div v-else class="error-msg">
              <i class="fa fa-times-circle"></i>
            </div>
          </v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
            scaevola imperdiet nec ut, sed euismod convenire principes at. Est
            et nobis iisque percipit, an vim zril disputando voluptatibus, vix
            an salutandi sententiae.</v-card-text
          >
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: "Timeline",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css");

.mission-name {
  margin-right: 1.8%;
}

.success-msg {
  margin-left: 1.8%;
  color: #270;
}
.error-msg {
  margin-left: 1.8%;
  color: #d8000c;
}
</style>
