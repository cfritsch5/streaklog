json.set! 'achievements' do
  @achievements.each do |achv|
    puts "do i work????"
    json.set! achv.id do
      json.name achv.achievement
    end
  end
end
json.set! 'routines' do
  @routines.each do |routine|
    json.extract! routine, :id, :achievement_id, :name
  end
end
