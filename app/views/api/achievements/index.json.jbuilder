json.set! 'achievements' do
  @achievements.each do |achv|
    puts "do i work????"
    json.set! achv.id do
      json.name achv.achievement
      json.description achv.description
      json.tags achv.tags
      json.notes achv.notes
      json.difficulty achv.difficulty
    end
  end
end
json.set! 'routines' do
  @routines.each do |routine|
    json.set! routine.id do
      json.name routine.name
      json.achievementId routine.achievement_id
      json.repeats routine.repeats
    end
  end
end

json.set! 'streaks' do
  json.array! @streaks do |streak|
    json.set! streak[:achievement], streak[:routine]
  end
end
