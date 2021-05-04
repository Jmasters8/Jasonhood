json.users do
  json.extract! user, :id, :first_name, :last_name, :email, :buying_power
end


json.assets do
  user.stock_assets.each do |stock_asset|
    json.set! stock_asset.id do 
      json.extract! stock_asset, :amount, :ticker, :owner_id, :id, :price
    end
  end
end
