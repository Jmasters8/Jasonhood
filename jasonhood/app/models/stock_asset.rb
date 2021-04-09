class StockAsset < ApplicationRecord
  
  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: "User"

  belongs_to :stock,
    foreign_key: :stock_id,
    class_name: "Stock"

end
