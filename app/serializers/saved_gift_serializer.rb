class SavedGiftSerializer < ActiveModel::Serializer
  attributes :id, :item, :description, :price, :quantity, :link_url, :image_url
  # has_one :user
  # has_one :wishlist

  def price
    object.price.to_d
  end

end
