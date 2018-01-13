<template>
    <div class="metric navy">
        <img class="icon"  :src="imgLink"/>
        <div class="metric-value">
        {{number}}<span>{{unit}}</span>
        </div>
        <div class="metric-name">
        {{name}}
        </div>
    </div>
</template>

<<script>
export default {
  props: ['img', 'number', 'unit', 'name'],
  computed: {
      imgLink(){
          return require('../img/icons/'+this.img)
      }
  }
}
</script>

