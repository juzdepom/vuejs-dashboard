<template>
  <div class="panel-left">
    <dashboard-item v-for="(d, index) in data" :data="d" :key="index"></dashboard-item>
  </div>
</template>

<script>
  import DashboardItem from './DashboardItem.vue'
  export default {
    props: ['data'],
    components: {
      DashboardItem,
    }
  }
</script>

