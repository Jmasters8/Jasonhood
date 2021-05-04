export const addStockAsset = (ticker, ownerId, amount, price) => {
  return $.ajax({
    url: '/api/stock_assets',
    method: 'POST',
    data: { stock_asset: { ticker, owner_id: ownerId, amount, price } }
  })
}