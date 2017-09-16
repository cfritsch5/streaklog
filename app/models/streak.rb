class Streak < ApplicationRecord
  validates :user_id, presence: true
  validates :name, presence: true, uniqueness: true
  
  # validates :last_achievement, :current_routine, allow_nil: true
  after_create :create_routine

  has_many :achievements
  has_many :routines

  belongs_to :last_achievement,
  foreign_key: :last_achievement_id,
  class_name: :Achievement

  belongs_to :current_routine,
  foreign_key: :current_routine_id,
  class_name: :Routine,
  optional: true


  def create_routine
    routine = Routine.create!(
      streak_id: self.id,
      repeats: ['whenever']
    )

    self.current_routine_id = routine.id
    self.save
  end

  # def current_routine_id= new_routine_id
  #   self.current_routine.end
  #   self.current_routine_id = new_routine_id
  #   self.save
  # end

  def continued?(new_achievement_id)
    puts " CONTINUED !!!!!! (new_achievement_id)"
    routine = current_routine
    if routine.continued?(self.last_achievement_id, new_achievement_id)
      self.current_streak = self.current_streak + 1
      self.last_achievement_id = new_achievement_id
      self.save
    else
      self.current_streak = 0
      self.save
    end
  end

  # def current_routine
  #   self.routines.each do |routine|
  #     return routine if routine.end_date.nil?
  #   end
  # end
end
