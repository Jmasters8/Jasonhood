class RenameAssetsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :assets, :cryptocurrency_id
    rename_table :assets, :stock_assets
  end
end
