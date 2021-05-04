class ChangeAssetStockColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :stock_assets, :ticker, :integer, null: false
    add_column :stock_assets, :ticker, :string
    add_column :stock_assets, :price, :integer
  end
end
