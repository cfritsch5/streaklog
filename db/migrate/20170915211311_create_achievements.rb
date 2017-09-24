class CreateAchievements < ActiveRecord::Migration[5.0]
  def change
    create_table :achievements do |t|
      t.string :name, null:false
      t.integer :streak_id
      t.integer :user_id, null: false
      t.string :description

      t.timestamps
    end

  end
end
