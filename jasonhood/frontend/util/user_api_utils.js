export const updateBuyingPower = (buyingPower, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    data: { buyingPower }
  })
}

export const updateStocks = (stock, amount, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    data: { stock }
  })
}