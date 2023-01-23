class WishlistsController < ApplicationController
    wrap_parameters format: []

    def index
        if User.find_by(id: session[:user_id])
            wishlists = Wishlist.where(:user_id => current_user.id).uniq
            render json: recipes, status: :ok
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    # def index
    #     user = User.find_by(id: session[:user_id])
    #     wishlists = user.wish_lists.uniq
    #     render json: wishlists, status: :ok
    # end

    def show
        wishlist = WishList.find(params[:id])
        render json: wishlist, status: :ok
    end

    def create
        wish_list = WishList.create!(wishlist_params)
        render json: wish_list, status: :created
    end

    def update
        wishlist = WishList.find(params[:id])
        wishlist.update!(wishlist_params)
        render json: wishlist, status: :accepted
    end

    def destroy
        wishlist = WishList.find(params[:id])
        wishlist.destroy
        render json: {}, status: :ok
    end


private

    def wishlist_params
        params.permit(:title, :event_date, :note)
    end
end
