<template>
  <a @click="clicked" :data-dashboard="data.dashboard" :data-title="data.title" :class="data.class"></a>
</template>

<script>
export default {
  props: ['data'],
  methods: {
      clicked(){
          console.log('clicked')
      }
  }
}
</script>

