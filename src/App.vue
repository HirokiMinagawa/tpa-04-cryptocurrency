<template>
  <div id="app">
    <h1>Cryptocurrency Chart</h1>
    <p>[{{ cryptocurrency }}] ({{ target }})</p>
    <div class="metrics-container">
      <Metric title="1 BTC <> JPY" :value="exchangeRate"></Metric>
      <Metric title="24 Hour Change" :value="dayChange"></Metric>
      <Metric title="24 Hour High" :value="dayHighRate"></Metric>
      <Metric title="24 Hour Low" :value="dayLowRate"></Metric>
      <Metric title="24 Hour Volume" :value="dayVolume"></Metric>
      <Metric title="Market Cap" :value="marketCap"></Metric>
    </div>
    <Chart
      :chartData="datacollection"
      :options="options"
      :style="{height: '400px', width: '1200px', padding: '20px 100px'}"
    />
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
      cryptocurrency: 'BTC',
      target: 'JPY',
      exchangeRate: '',
      dayChange: '',
      dayHighRate: '',
      dayLowRate: '',
      dayVolume: '',
      marketCap: '',
      datacollection: {
        labels: [],
        datasets: [
          {
            label: 'BTC',
            data: [],
            pointBackgroundColor: '#229aeb',
            backgroundColor: ['rgba(145, 208, 253, 0.7)'],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
      },
    };
  },
  mounted: function() {
    this.fetchMarketinfo(this.cryptocurrency, this.target);
    this.fetchHistoricalData(this.cryptocurrency, this.target);
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
          const closeArr = arr.map(obj => numeral(obj.close).value());
          this.dayHighRate = numeral(Math.max.apply(null, closeArr)).format('0,0.00');
          this.dayLowRate = numeral(Math.min.apply(null, closeArr)).format('0,0.00');
          const timeArr = arr.map(obj => obj.time);
          this.updateDataCollection(timeArr, closeArr);
        });
    },
    updateDataCollection: function(timeArr, closeArr) {
      const newDataCollection = Object.assign({}, this.datacollection);
      newDataCollection.datasets[0].data = closeArr;
      newDataCollection.labels = timeArr;
      this.datacollection = newDataCollection;
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

