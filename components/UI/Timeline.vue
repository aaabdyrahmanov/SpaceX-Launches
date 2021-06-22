<template>
  <v-timeline class="container">
    <v-timeline-item v-for="(info, index) in data" :key="index">
      <template v-slot:icon>
        <v-avatar>
          <img :src="info.links.patch.small" class="rocket-icon">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>{{ info.rocketNationality }}</span>
      </template>
      <v-card class="elevation-17">
        <v-card-title class="headline">
          <div class="flight-number">
            {{ info.flight_number }}
          </div>
          <div class="mission-name">
            {{ info.name }}
          </div>
          |
          <div v-if="info.success === true" class="success-msg">
            <i class="fa fa-check" />
          </div>
          <div v-else class="error-msg">
            <i class="fa fa-times-circle" />
          </div>
        </v-card-title>
        <div v-if="info.details !== null">
          <v-card-text>
            <read-more
              :text="info.details"
              :max-chars="80"
              more-str="read more"
              link="#"
              less-str="read less"
            />
          </v-card-text>
        </div>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: 'Timeline',
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
