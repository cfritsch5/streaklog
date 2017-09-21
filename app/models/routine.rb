class Routine < ApplicationRecord
  validates :start_date, :streak_id, presence: true
  belongs_to :streak

  before_validation :set_start_date
  after_create :update_current_streak, :update_end_dates, on: :create

  def continued?(new_achv_id, last_achv_id)
    next_date = Achievement.find(new_achv_id).created_at.to_date
    last_date = Achievement.find(last_achv_id).created_at.to_date
    # puts "DATES", next_date, last_date
    self.repeats.all? do |rule|
      puts "rule", rule
      # debugger
      repeat_rules( rule, next_date, last_date)
    end
  end

  private
  def set_start_date
    self.start_date = Date.current
  end

  def repeat_rules(rule, next_date, last_date)
    case rule
      when 'whenever'
        return true
      when 'daily'
        return last_date == next_date + 1
      # when 'once_a_week'
      #   return last_date < next_date + 7
      # when 'weekly'
      #   return last_date == next_date + 7
      # when 'weekdays'
      #   return true if next_date.saturday? || next_date.sunday?
      #   return true if next_date.monday? && last_date.friday?
      #   return last_date == next_date + 1
      # when 'every_week_on_'
      #   return true if next_date.wday == last_date.wday
      else
        return false
      end
  end

  def update_current_streak
    streak.current_routine_id = self.id
    streak.save
  end

  def update_end_dates
    streak = Streak.find(self.streak_id)
    other_routines = streak.routines
    other_routines.each do |routine|
      next if routine.id == self.id
      if routine.end_date.nil? || routine.end_date > Date.current
        routine.end_date = Date.current - 1
        routine.save
      end
    end
  end

end
