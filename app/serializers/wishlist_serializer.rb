class WishlistSerializer < ActiveModel::Serializer
  attributes :id, :title, :event_date, :note

  has_many :saved_gifts
end
