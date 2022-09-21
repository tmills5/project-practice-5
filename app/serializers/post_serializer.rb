class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :post_title, :post_content

  belongs_to :user
  has_many :comments, dependent: :destroy
end
