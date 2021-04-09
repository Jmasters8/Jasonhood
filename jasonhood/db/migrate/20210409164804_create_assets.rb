class CreateAssets < ActiveRecord::Migration[5.2]
  def change
    create_table :assets do |t|
      t.integer :owner_id, null: false
      t.integer :stock_id, null: false
      t.integer :cryptocurrency_id, null: false
      t.integer :amount, null: false

      t.timestamps
    end
    add_index :assets, :owner_id
    add_index :assets, :stock_id
    add_index :assets, :cryptocurrency_id
  end
end
