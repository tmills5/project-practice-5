class CommentsController < ApplicationController
    def index
        if params[:brewery_id]
            brewery = Brewery.find(params[:brewery_id])
            comments = brewery.comments
        else
            comments = Comment.all
        end
        render json: comments, status: :ok
    end

    def show
        comment = Comment.find(params[:id])
        if comment
            render json: comment
        else
            render json: {error: "Comment Not Found"}, status: :not_found
        end
    end
end
