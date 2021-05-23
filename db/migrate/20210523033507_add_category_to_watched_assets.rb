class AddCategoryToWatchedAssets < ActiveRecord::Migration[5.2]
  def change
    add_column :watched_assets, :category, :string
  end
end
