class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :name
      t.string :location
      t.string :description
      t.string :image_url
      t.integer :price
      t.integer :no_of_bedrooms
      t.integer :no_of_bathrooms

      t.timestamps
    end
  end
end
