const fetch = require('node-fetch');
const moment = require('moment-timezone');
const numeral = require('numeral');
require('dotenv').config();

/**
 * get historical data
 * @function
 * @param {string} cryptocurrency
 * @param {string} target
 * @return {Promese}
 */
const getHistoricalData = function(cryptocurrency = 'BTC', target = 'JPY') {
  const fetchUrl = `https://min-api.cryptocompare.com/data/histominute?fsym=${cryptocurrency}&tsym=${target}&limit=1440`;
  return fetch(fetchUrl)
    .then(res => res.json())
    .then(json => {
      return json.Data.map(obj => {
        const time = moment(obj.time, 'X').format('Y-MM-DD HH:mm');
        const close = numeral(obj.close).format('0,0.00');
        return {
          time,
          close,
        };
      });
    });
};

/**
 * get market infomation
 * @function
 * @param {string} cryptocurrency
 * @param {string} target
 * @return {Promese}
 */
const getMarketInformation = function(cryptocurrency = 'BTC', target = 'JPY') {
  const fetchUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?convert=${target}`;
  return fetch(fetchUrl, {
    headers: {
      'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_CAP_API_KEY,
    } 
  })
    .then(res => res.json())
    .then(json => {
      const cryptInfo = json.data.filter(obj => obj.symbol === cryptocurrency);
      const quoteJPY = cryptInfo[0].quote.JPY;
      const volume_24h = numeral(quoteJPY.volume_24h).format('0,0.00 a').toUpperCase();
      const market_cap = numeral(quoteJPY.market_cap).format('0,0.00 a').toUpperCase();
      return {
        volume_24h,
        market_cap,
      };
    });
};

module.exports = {
  getHistoricalData,
  getMarketInformation,
};
