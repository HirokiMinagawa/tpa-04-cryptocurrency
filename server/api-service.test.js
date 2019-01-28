const { getHistoricalData } = require('./api-service');
const { getMarketInformation } = require('./api-service');


describe('getHistoricalData', () => {
  test('1441の長さのデータを返す', async() => {
    const historicalData = await getHistoricalData();
    expect(historicalData).toHaveLength(1441);
  });
});

describe('getMarketInfomation', () => {
  test('volume_24hとmarket_capというプロパティを持つ', async() => {
    const marketInfomation = await getMarketInformation();
    expect(marketInfomation).toHaveProperty('volume_24h');
    expect(marketInfomation).toHaveProperty('market_cap');
  });
});