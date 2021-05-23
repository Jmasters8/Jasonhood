class CreateWatchedAssets < ActiveRecord::Migration[5.2]
  def change
    create_table :watched_assets do |t|
      t.integer :watcher_id, null: false
      t.string :ticker
      t.integer :price

      t.timestamps
    end
    add_index :watched_assets, :watcher_id
  end
end
