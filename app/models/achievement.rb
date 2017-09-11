class Achievement < ApplicationRecord
  validates :achievement, null:false
  belongs_to :user
  has_one :routine
end
