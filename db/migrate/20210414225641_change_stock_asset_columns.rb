class ChangeStockAssetColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :stock_assets, :stock_id, :integer, null: false
    add_column :stock_assets, :ticker, :integer, null: false
  end
end
