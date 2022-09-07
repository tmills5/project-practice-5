class SessionsController < ApplicationController
    def login
        #find user by username
        user = User.find_by(username: params[:username])
        #authenticate
        # byebug
        if user&.authenticate(params[:password])
            session[:current_user] = user.id
            render json: user, status: :ok
            
        else
            render json: {error: "Invalid Login Credentials"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :current_user
        head :no_content
    end

end