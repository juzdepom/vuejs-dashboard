<template>
  <div id="app">
    <header-component></header-component>
    <div class="body">
      <panel-component :data="leftPanelData"></panel-component>
      <div style="flex-direction: column;">
        <div class="dashboard" id="overview">
              <div class="metrics-container">
                <metric-component v-for="(m,index) in metrics"
                  :key="index"
                  :color="m.color"
                  :img="m.img"
                  :number="m.number"
                  :unit="m.unit"
                  :name="m.name">
                </metric-component>
              </div>
              <chart-component></chart-component>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Panel from './components/Panel.vue'
import Metric from './components/Metric.vue'
import Chart from './components/Chart.vue'

export default {
  name: 'app',
  components: {
    headerComponent: Header,
    panelComponent: Panel, 
    metricComponent: Metric, 
    chartComponent: Chart, 
  },
  data(){
    return {
      metrics: [
        { color: 'navy', img: 'launchWhite.svg', number: '24.3', unit: 'K', name: "App Launches" },
        { color: 'orange', img: 'snipWhite.svg', number: '33', unit: 'K', name: "Snips" },
        { color: 'grass', img: 'redeemWhite.svg', number: '10', unit: 'K', name: "Redeems" },
        { color: 'aqua', img: 'snapWhite.svg', number: '55', unit: 'K', name: "Snaps" },
      ],
      leftPanelData: [
        { dashboard: "overview", title: "At-a-Glance", class: "link-1 icon icon-dash selected" },
        { dashboard: "launches", title: "App Launches", class: "link-2 icon icon-launch" },
        { dashboard: "snips", title: "Snips", class: "link-2 icon icon-snip" },
        { dashboard: "redeems", title: "Redeems", class: "link-4 icon icon-redeem" },
        { dashboard: "snaps", title: "Snaps", class: "link-5 icon icon-snap" },
        { dashboard: "downloads", title: "Downloads", class: "link-6 icon icon-download" },
        { dashboard: "stores", title: "Stores", class: "link-7 icon icon-store" },
      ]
    }
  },
}
</script>

<style>

</style>
