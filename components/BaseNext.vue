<template>
  <div class="container">
    <v-card raised outlined class="mt-4">
      <ul class="content_info pa-3">
        <li>
          <ul class="content_list pa-4">
            <li class="display-2">
              <strong>{{ data.flight_number }}</strong>
            </li>
            <li>{{ data.mission_name }}</li>
            <li>{{ data.rocket.rocket_name }}</li>
            <li>{{ data.launch_site.site_name }}</li>
          </ul>
        </li>
        <li class="ma-auto pt-6">
          <ul class="content_timer pa-0 ma-auto">
            <li v-if="duration[0] !== '0'">Will be launched</li>
            <li v-else>Launched</li>
            <li
              v-if="duration[0] !== '0'"
              class="content_timer_duration ma-auto"
            >
              <ul
                v-for="(time, index) in duration"
                :key="index"
                class="content_timer_n ma-auto"
              >
                <li class="pt-2">{{ time }}</li>
                <li>{{ names[index] }}</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "BaseNext",
  props: {
    data: {
      type: Object,
      required: true
    },
    duration: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    names: ["Seconds", "Minutes", "Hours", "Days"]
  })
}
</script>

<style scoped>
ul > li {
  list-style: none;
}

.content_list > li {
  padding-bottom: 10px;
}
@media (max-width: 639px) {
  .container {
    width: 450px;
    height: 380px;
  }
  .content_info {
    display: flex;
    flex-direction: column;
  }
  .content_list {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .content_timer {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .content_timer_duration {
    display: flex;
    flex-direction: row-reverse;
  }
  .content_timer_n {
    display: flex;
    flex-direction: column-reverse;
    padding: 20px;
  }
}
@media (min-width: 640px) {
  .container {
    width: 600px;
  }
  .content_info {
    display: flex;
    flex-direction: row;
  }
  .content_list {
    display: flex;
    flex-direction: column;
  }
  .content_timer {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .content_timer_duration {
    display: flex;
    flex-direction: row-reverse;
  }
  .content_timer_n {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
}
</style>
