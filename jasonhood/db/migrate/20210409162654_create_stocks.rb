class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :name, null: false
      t.string :ticker, null: false
      t.integer :price, null: false
      t.string :description, null: false
      t.timestamps
    end

    add_index :stocks, :name
    add_index :stocks, :ticker, unique: true
  end
end
