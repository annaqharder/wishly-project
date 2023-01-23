class SavedGift < ApplicationRecord
  belongs_to :user
  belongs_to :wishlist

  validates :item, :price, presence: true

end
