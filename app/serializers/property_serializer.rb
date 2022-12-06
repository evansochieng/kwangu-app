class PropertySerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :image_url, :price, :no_of_bedrooms, :no_of_bathrooms, :user_id
end
