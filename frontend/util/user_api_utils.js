export const updateBuyingPower = (buyingPower, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    data: { buyingPower }
  })
}

export const updateStocks = (stock, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    data: { stock }
  })
}