class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_body, :user_id, :brewery_id

  belongs_to :user
  belongs_to :brewery
end
