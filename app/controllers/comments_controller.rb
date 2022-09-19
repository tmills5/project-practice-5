class CommentsController < ApplicationController
    def index
        comments = Comment.all.order(:id)
        render json: comments
    end
end
