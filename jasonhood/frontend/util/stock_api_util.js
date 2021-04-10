
export const fetchStock = (symbol) => {
  return $.ajax({
    method: 'GET',
    url: `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=c1o93ii37fkqrr9scqp0`
  })
}

export const fetchStockInfo = (symbol) => {
  return $.ajax({
    method: 'GET',
    url: `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=c1o93ii37fkqrr9scqp0`
  })
}