class Stock < ApplicationRecord
  validates :name, :ticker, :price, presence: true
  validates :ticker, uniqueness: true

  has_many :stock_assets,
    foreign_key: :stock_id,
    class_name: "StockAsset"

  has_many :owners,
    through: :stock_assets,
    source: :owner
end
