
export const fetchStock = (symbol) => {
  return $.ajax({
    method: 'GET',
    url: `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=c1o93ii37fkqrr9scqp0`
  })
}

export const fetchStockInfo = (symbol) => {
  return $.ajax({
    method: 'GET',
    url: `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=G2OZFC9Q3KIVDKJG`
    // url: `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=c1o93ii37fkqrr9scqp0`
  })
}

// export const fetchStockInfoTest = (symbol) => {
//   return $.ajax({
//     method: 'GET',
//     url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=60min&apikey=G2OZFC9Q3KIVDKJG`
//   })
// }

export const fetchStockData = (symbol) => {
  return $.ajax({
    method: 'GET',
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=60min&apikey=G2OZFC9Q3KIVDKJG`
    // url: `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=c1o93ii37fkqrr9scqp0`
  })
}