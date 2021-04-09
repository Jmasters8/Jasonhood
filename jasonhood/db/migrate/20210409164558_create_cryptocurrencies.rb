class CreateCryptocurrencies < ActiveRecord::Migration[5.2]
  def change
    create_table :cryptocurrencies do |t|
      t.string :name, null: false
      t.string :ticker, null: false
      t.integer :price, null: false

      t.timestamps
    end
    
    add_index :cryptocurrencies, :name
    add_index :cryptocurrencies, :ticker, unique: true
  end
end
