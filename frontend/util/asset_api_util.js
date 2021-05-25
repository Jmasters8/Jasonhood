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


export const addWatchedAsset = (ticker, watcherId, price, category) => {
  return $.ajax({
    url: '/api/watched_assets',
    method: 'POST',
    data: { watched_asset: {ticker, watcher_id: watcherId, price, category} }
  })
}

export const deleteWatchedAsset = (watcherId, assetId) => {
  return $.ajax({
    url: `/api/watched_assets/${assetId}`,
    data: { watched_asset: {watcher_id: watcherId}}
  })
}