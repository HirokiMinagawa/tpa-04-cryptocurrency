const { getHistoricalData } = require('./api-service');
const { getMarketInformation } = require('./api-service');


describe('getHistoricalData', () => {
  let historicalData;
  beforeAll(async() => {
    historicalData = await getHistoricalData();
  });
  test('timeとcloseというプロパティを持つ', () => {
    for (let i = 0; i < historicalData.length; i++) {
      expect(historicalData[i]).toHaveProperty('time');
      expect(historicalData[i]).toHaveProperty('close');
    }
  });
  test('1441の長さのデータを返す', () => {
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