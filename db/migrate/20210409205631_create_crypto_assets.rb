class CreateCryptoAssets < ActiveRecord::Migration[5.2]
  def change
    create_table :crypto_assets do |t|
      t.integer :owner_id, null: false
      t.integer :crypto_id, null: false
      t.integer :amount, null: false
      t.timestamps
    end
    add_index :crypto_assets, :owner_id
    add_index :crypto_assets, :crypto_id 
  end
end
