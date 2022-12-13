class User < ApplicationRecord
    has_many :properties
    has_secure_password

    validates :name, presence: true
    validates :password, length: { minimum: 8 }
    validates :username, uniqueness: true, presence: true
end
