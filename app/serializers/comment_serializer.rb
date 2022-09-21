class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :post_id, :comment_body

  belongs_to :post
  belongs_to :user
end
