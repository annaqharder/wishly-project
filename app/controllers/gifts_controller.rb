class GiftsController < ApplicationController

    wrap_parameters format: []

    # before_action :authorize, only: [:show, :create, :update]

    def index
        gifts = Gift.all
        render json: gifts, status: :ok
    end

    def show
        gift = find_gift
        render json: gift, status: :ok
    end

    def create
        gift = Gift.create!(gift_params)
        render json: gift, status: :created
    end

    def update
        gift = find_gift
        gift.update!(gift_params)
        render json: gift, status: :accepted
    end


private

    def find_gift
        gift = Gift.find(params[:id])
    end

    def gift_params
        params.permit(:item, :description, :price, :link_url, :image_url)
    end
end
