<template>
  <div id="app">
    <h1>Cryptocurrency Chart</h1>
    <p>[BTC] (JPY)</p>
    <div class="metrics-container">
      <Metric title="1 BTC <> JPY" :value="exchangeRate"></Metric>
      <Metric title="24 Hour Change" :value="dayChange"></Metric>
      <Metric title="24 Hour High" :value="dayHighRate"></Metric>
      <Metric title="24 Hour Low" :value="dayLowRate"></Metric>
      <Metric title="24 Hour Volume" :value="dayVolume"></Metric>
      <Metric title="Market Cap" :value="marketCap"></Metric>
    </div>
    <Chart></Chart>
    <h5>TECH PLAY ACADEMY</h5>
  </div>
</template>

<script>
import Metric from './components/Metric.vue';
import Chart from './components/Chart.vue';

export default {
  name: 'App',
  components: {
    Metric,
    Chart,
  },
  data: function() {
    return {
      exchangeRate: 'Metric Value',
      dayChange: 'Metric Value',
      dayHighRate: 'Metric Value',
      dayLowRate: 'Metric Value',
      dayVolume: 'Metric Value',
      marketCap: 'Metric Value',
    };
  }
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}

.metrics-container {
  display: flex;
  justify-content: center;
}
</style>
