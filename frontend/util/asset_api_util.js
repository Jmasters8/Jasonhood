export const addStockAsset = (ticker, ownerId, amount, price) => {
  return $.ajax({
    url: '/api/stock_assets',
    method: 'POST',
    data: { stock_asset: { ticker, owner_id: ownerId, amount, price } }
  })
}

export const updateStockAsset = (amount, assetId) => {
  // console.log(amount)
  return $.ajax({
    url: `/api/stock_assets/${assetId}`,
    method: 'PATCH',
    // data: { stock_asset: { amount: amount } }
    data: { amount }
  })
}

export const deleteStockAsset = (ownerId, assetId) => {
  return $.ajax({
    url: `/api/stock_assets/${assetId}`,
    method: 'DELETE',
    data: { stock_asset: {owner_id: ownerId } }
  })
}