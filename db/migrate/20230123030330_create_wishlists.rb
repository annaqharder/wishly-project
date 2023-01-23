class CreateWishlists < ActiveRecord::Migration[6.1]
  def change
    create_table :wishlists do |t|
      t.string :title
      t.date :event_date
      t.text :note

      t.timestamps
    end
  end
end
