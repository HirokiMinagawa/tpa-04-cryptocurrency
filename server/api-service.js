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
    .then(data => data.Data);
};

const getMarketInformation = function() {
  // GET: https:https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?convert=JPY
  // headers: {
  //   'X-CMC_PRO_API_KEY':{key}
  // }
  // [RES]
  // {
  //   "status": {
  //       "timestamp": "2019-01-14T17:07:02.479Z",
  //       "error_code": 0,
  //       "error_message": null,
  //       "elapsed": 10,
  //       "credit_count": 1
  //   },
  //   "data": [
  //       {
  //           "id": 1,
  //           "name": "Bitcoin",
  //           "symbol": "BTC",
  //           "slug": "bitcoin",
  //           "circulating_supply": 17481500,
  //           "total_supply": 17481500,
  //           "max_supply": 21000000,
  //           "date_added": "2013-04-28T00:00:00.000Z",
  //           "num_market_pairs": 6754,
  //           "tags": [
  //               "mineable"
  //           ],
  //           "platform": null,
  //           "cmc_rank": 1,
  //           "last_updated": "2019-01-14T17:05:24.000Z",
  //           "quote": {
  //               "JPY": {
  //                   "price": 400954.7811146641,
  //                   "volume_24h": 588436380122.4268,
  //                   "percent_change_1h": 0.0739,
  //                   "percent_change_24h": 3.0082,
  //                   "percent_change_7d": -8.9603,
  //                   "market_cap": 7009291006056,
  //                   "last_updated": "2019-01-14T17:06:00.000Z"
  //               }
  //           }
  //       },
  //       ・・・
  return Promise.resolve({});
};

module.exports = {
  getHistoricalData,
  getMarketInformation,
};
