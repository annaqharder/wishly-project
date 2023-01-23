class CreateGifts < ActiveRecord::Migration[6.1]
  def change
    create_table :gifts do |t|
      t.string :item
      t.text :description
      t.decimal :price
      t.integer :quantity
      t.string :link_url
      t.string :image_url

      t.timestamps
    end
  end
end
