class SavedGiftsController < ApplicationController

    wrap_parameters format: []

    def index
        saved_gifts = SavedGift.all
        render json: saved_gifts, status: :ok
    end

    def show
        saved_gift = find_saved_gift
        render json: saved_gift, status: :ok
    end

    def create
        saved_gift = SavedGift.create!(saved_gift_params)
        render json: saved_gift, status: :created
    end

    def update
        saved_gift = find_saved_gift
        saved_gift.update!(saved_gift_params)
        render json: saved_gift, status: :accepted
    end

    def destroy
        saved_gift = find_saved_gift
        gift.destroy
        head :no_content
    end

private

    def find_saved_gift
        saved_gift = SavedGift.find(params[:id])
    end

    def saved_gift_params
        params.permit(:gift_name, :description, :price, :link_url, :image_url, :user_id, :wish_list_id)
    end
end
