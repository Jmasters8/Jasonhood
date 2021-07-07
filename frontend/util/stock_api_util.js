export const fetchStock = (symbol) => {
  return $.ajax({
    method: 'GET',
    url: `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${window.finnhubAPIKey}`
  })
}

export const fetchStockInfo = (symbol) => {
  return $.ajax({
    method: 'GET',
    url: `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=G2OZFC9Q3KIVDKJG`
  })
}


export const fetchStockData = (symbol, start, end) => {
  return $.ajax({
    method: 'GET',
    url: `https://finnhub.io/api/v1/stock/candle?symbol=${symbol.toUpperCase()}&resolution=5&from=${start}&to=${end}&token=${window.finnhubAPIKey}`
    
  })
}

export const fetchStockNews = (symbol, start, end) => {
  return $.ajax({
    method: 'GET',
    url: `https://finnhub.io/api/v1/company-news?symbol=${symbol.toUpperCase()}&from=${start}&to=${end}&token=${window.finnhubAPIKey}`
  })
}

export const fetchMarketNews = () => {
  return $.ajax({
    method: 'GET',
    url: `https://finnhub.io/api/v1/news?category=general&token=${window.finnhubAPIKey}`
  })
}

export const fetchYesterClosing = () => {
  return $.ajax({
    method: 'GET'
  })
}

export const resetCurrentStock = () => {
  return $.ajax({
    method: 'GET'
  })
}