json.set! 'achievements' do
  @achievements.each do |achv|
    # puts "do i work????"
    if achv.created_at.to_date == Date.today
      json.set! achv.id do
        json.id achv.id
        json.name achv.name
        json.description achv.description
        json.streakId achv.streak_id
        json.date achv.created_at.to_date
      end
    end
  end
end
json.set! 'streaks' do
  @streaks.each do |streak|
    json.set! streak.id do
      json.id streak.id
      json.name streak.name
      json.routine streak.current_routine_id
      json.achievement streak.last_achievement_id
      json.currentStreak streak.current_streak
    end
  end
end
json.set! 'routines' do
  @routines.each do |routine|
    # puts "do i work????"
    if routine.end_date.nil? || routine.end_date > Date.today
      json.set! routine.id do
        json.id routine.id
        json.streak_id routine.streak_id
        json.name @streaks.where(id: routine.streak_id).last.name
        json.repeats routine.repeats
      end
    end
  end
end
