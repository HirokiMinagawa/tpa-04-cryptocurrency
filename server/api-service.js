const getHistoricalData = function() {
  //GET: https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=JPY&limit=1440&api_key={key}
  // [RES]
  // {
  //   "Response": "Success",
  //   "Type": 100,
  //   "Aggregated": false,
  //   "Data": [
  //       {
  //           "time": 1547397780,
  //           "close": 382810.22,
  //           "high": 382899.87,
  //           "low": 382696.24,
  //           "open": 382808.15,
  //           "volumefrom": 23.84,
  //           "volumeto": 9180677.61
  //       },
  // ・・・

  return Promise.resolve({});
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
