class User < ApplicationRecord
  :validates :username, :email, presence: true

  has_many :achievements
  has_many :routines
  
end
