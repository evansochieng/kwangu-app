class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :contact, :username
end
