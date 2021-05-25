class AddEmojiToWatchedAssets < ActiveRecord::Migration[5.2]
  def change
    add_column :watched_assets, :emoji, :string
  end
end
