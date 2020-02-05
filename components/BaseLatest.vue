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
        <li class="content_timer ma-auto">
          <ul class="pa-0">
            <li>
              Launched
            </li>
            <li class="mt-4">
              {{ duration }}
            </li>
          </ul>
        </li>
      </ul>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "BaseLatest",
  props: {
    data: {
      type: Object,
      required: true
    },
    duration: {
      type: String,
      required: true
    }
  }
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
}
</style>
