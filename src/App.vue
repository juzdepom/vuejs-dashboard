<template>
  <div id="app">
    <header-component></header-component>
    <div class="body">
      <panel-component></panel-component>
      <div style="flex-direction: column;">
        <div class="dashboard" id="overview">
              <div class="metrics-container">
                <metric-component 
                  img="launchWhite.svg"
                  number="24.3"
                  unit="K"
                  name="App Launches">
                </metric-component>

                <div class="metric orange">
                  <img class="icon" src="./img/icons/snipWhite.svg"/>
                  <div class="metric-value">
                    33<span>K</span>
                  </div>
                  <div class="metric-name">
                    Snips
                  </div>
                </div>

                <div class="metric grass">
                  <img class="icon" src="./img/icons/redeemWhite.svg"/>
                  <div class="metric-value">
                    10<span>K</span>
                  </div>
                  <div class="metric-name">
                    Redeems
                  </div>
                </div>

                <div class="metric aqua">
                  <img class="icon" src="./img/icons/snapWhite.svg"/>
                  <div class="metric-value">
                    25<span>K</span>
                  </div>
                  <div class="metric-name">
                    Snaps
                  </div>
                </div>
              </div>

              <div class="chart">
                <canvas id="testChart" height="500" width="800"></canvas>
              </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Panel from './components/Panel.vue'
import Metric from './components/Metric.vue'

export default {
  name: 'app',
  components: {
    headerComponent: Header,
    panelComponent: Panel, 
    metricComponent: Metric, 
  }
}
</script>

<style>

</style>
