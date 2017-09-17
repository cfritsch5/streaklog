# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Achievement.destroy_all
Routine.destroy_all
Streak.destroy_all

user_1 = User.create!(username: 'cfritsch', email: 'caseyfritsch@gmail.com', password: 'password')
# achievement_1 = Achievement.create!(achievement: 'levo', user_id: user_1.id, difficulty: 1, tags: ['meds', 'daily'] )
# routine_1 = Routine.create!(name:'Take levo', achievement: achievement_1, repeats: ['daily'], user_id: user_1.id)
# achievement_2 = Achievement.create!(achievement: 'returned sophie\'s email', user_id: user_1.id, difficulty: 5, tags: ['email'])

4.downto(1) do |i|
  Achievement.create!(name:"take levo", user_id: user_1.id, created_at: Date.current - i, repeats: ["daily"])
end

2.downto(1) do |i|
  Achievement.create!(name:"take vitamin supplment", user_id: user_1.id, created_at: Date.current - i, repeats: ["daily"])
end

7.downto(1) do |i|
  Achievement.create!(name:"brush teeth", user_id: user_1.id, created_at: Date.current - i, repeats: ["daily"])
end

# 6.downto(3) do |i|
#   Achievement.create!(name:"do yoga", user_id: user_1.id, created_at: Date.current - i, repeats: ["daily"])
# end
#
# Achievement.create!(name:"do yoga", user_id: user_1.id, created_at: Date.current - 1, repeats: ["daily"])
