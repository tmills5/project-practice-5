class UsersController < ApplicationController
    wrap_parameters format: []

    def index
        render json: User.all.order(:id)
    end

    def create
        user = User.create!(user_params)
        session[:current_user] = user.id
        render json: user, status: :created
    end

    def show
        # using session to find user in question. sessions are in user browser
        # if session for user currently happening. set our user to that user and render json
        current_user = User.find_by!(id: session[:current_user])
        render json: current_user
    end

    def update
        current_user = User.find_by!(id: session[:current_user])
        current_user.update(user_params)
        render json: current_user
    end

    def destroy
        current_user = User.find_by!(id: session[:current_user])
        if current_user
            current_user.destroy
            head :no_content
        else
            render json: {error: "User Not Found"}, status: :not_found
        end
    end

    private

    def user_params
        params.permit(:email, :password, :username)
    end
end
