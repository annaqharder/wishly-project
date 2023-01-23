class UsersController < ApplicationController

    # before_action :authorize, only: [:show]

    def index
        users = User.all
        render json: users, status: :ok
    end

    # def index
    #     user = User.find_by(id: session[:user_id])
    #     render json: user, status: :ok
    # end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :avatar_url)
    end

end
