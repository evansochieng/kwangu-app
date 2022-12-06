class User < ApplicationRecord
    has_many :properties
    has_secure_password

    validates :password, length: { minimum: 8 }
    validates :username, uniqueness: true
end
