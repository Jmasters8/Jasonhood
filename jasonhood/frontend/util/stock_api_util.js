
export const fetchStock = (symbol) => (
  $.ajax({
    method: 'GET',
    url: `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=c1o93ii37fkqrr9scqp0`
  })
)