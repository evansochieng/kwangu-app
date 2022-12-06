class Property < ApplicationRecord
    belongs_to :user

    validates :name,:image_url,:price,:location,:no_of_bedrooms,:no_of_bathrooms, presence: true
    validates :description, presence:true ,length: { maximum: 150 }
end
