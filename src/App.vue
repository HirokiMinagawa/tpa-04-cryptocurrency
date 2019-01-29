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
const numeral = require('numeral');

export default {
  name: 'App',
  components: {
    Metric,
    Chart,
  },
  data: function() {
    return {
      exchangeRate: '',
      dayChange: '',
      dayHighRate: '',
      dayLowRate: '',
      dayVolume: '',
      marketCap: '',
    };
  },
  mounted: function() {
    const cryptocurrency = 'BTC';
    const target = 'JPY';
    this.fetchMarketinfo(cryptocurrency, target);
    this.fetchHistoricalData(cryptocurrency, target);
  },
  methods: {
    fetchMarketinfo: function(cryptocurrency, target) {
      fetch(`/api/market-information?cryptocurrency=${cryptocurrency}&target=${target}`)
        .then(res => res.json())
        .then(json => {
          this.dayVolume = json.volume_24h;
          this.marketCap = json.market_cap;
        });
    },
    fetchHistoricalData: function(cryptocurrency, target) {
      fetch(`/api/historical-data?cryptocurrency=${cryptocurrency}&target=${target}`)
        .then(res => res.json())
        .then(arr => {
          const exchangeRateNow = arr[1440].close;
          this.exchangeRate = exchangeRateNow;
          this.dayChange = numeral(numeral(exchangeRateNow).value() - numeral(arr[0].close).value()).format('0,0.00');
          const closeArr = arr.map(val => numeral(val.close).value());
          this.dayHighRate = numeral(Math.max.apply(null, closeArr)).format('0,0.00');
          this.dayLowRate = numeral(Math.min.apply(null, closeArr)).format('0,0.00');
        });
    },
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
