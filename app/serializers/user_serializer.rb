class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :username, :is_admin

  has_many :comments, dependent: :destroy
  has_many :breweries, through: :comments
end
