class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :post_title, :post_content

  has_many :comments
end
