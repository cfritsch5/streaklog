class Achievement < ApplicationRecord
  validates :name, presence:true
  belongs_to :streak, optional: true

  # has_many :routines, through: :streak
  after_create :connect_streak
  before_validation :series?

  def series?
    # debugger
    if self.streak_id
      add_to_series
    else
      find_series
    end
  end

  attr_accessor :repeats

  def add_to_series
    self.name = self.streak.name unless self.name
    self.user_id = self.streak.user_id
  end

  def find_series
    streak = Streak.find_by(name: self.name)
    if streak
      self.streak_id = streak.id
    else
      achv = Achievement.find_by(name: self.name)#.where.not(streak_id: nil).last
      if achv
        self.streak_id = achv.streak_id
      end
    end
  end

  def connect_streak
    # puts "CONNNECTING errIIIIIEHHHH .... MMM BEEEP beep EIIIIIHHH"
    if repeats && !self.streak_id
      streak = Streak.create!(
      name: self.name,
      user_id: self.user_id,
      last_achievement_id: self.id,
      repeats: self.repeats || ['?????']
      )

      self.streak_id = streak.id
      self.save
    end

    if(self.streak_id)
      self.streak.continued?(self.id)
    end
  end

  # def ensure_streak
  #   if repeats && !self.streak_id
  #     streak = Streak.create!(
  #     name: self.name,
  #     user_id: self.user_id,
  #     last_achievement_id: self.id,
  #     repeats: self.repeats || ['?????']
  #     )
  #
  #     self.streak_id = streak.id
  #     self.save
  #   end
  # end
  # def ensure_streak
  #   unless self.streak_id
  #     streak = Streak.create!(
  #     name: self.name,
  #     user_id: self.user_id,
  #     last_achievement_id: self.id,
  #     repeats: self.repeats || ['?????']
  #     )
  #
  #     self.streak_id = streak.id
  #     self.save
  #   end
  # end
end
