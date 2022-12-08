class AddSoldToProperty < ActiveRecord::Migration[6.1]
  def change
    add_column :properties, :sold, :boolean
  end
end
