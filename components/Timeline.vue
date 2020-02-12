<template>
  <div>
    <v-timeline class="container">
      <v-timeline-item v-for="(info, index) in data" :key="index">
        <template v-slot:icon>
          <v-avatar>
            <img :src="info.rocketIcon" class="rocket-icon" />
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>{{ info.rocketNationality }}</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">
            <div class="flight-number">
              {{ info.flightNumber }}
            </div>
            <div class="mission-name">
              {{ info.missionName }}
            </div>
            |
            <div v-if="info.launchSuccess === true" class="success-msg">
              <i class="fa fa-check"></i>
            </div>
            <div v-else class="error-msg">
              <i class="fa fa-times-circle"></i>
            </div>
          </v-card-title>
          <div v-if="info.launchDetail !== null">
            <v-card-text>
              <read-more
                :text="info.launchDetail"
                :max-chars="80"
                more-str="read more"
                link="#"
                less-str="read less"
              ></read-more>
            </v-card-text>
          </div>
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
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css");

.flight-number {
  color: gray;
  margin-right: 1%;
}

.rocket-icon:hover {
  width: 180%;
  height: 180%;
}

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
