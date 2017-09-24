class CreateStreaks < ActiveRecord::Migration[5.0]
  def change
    create_table :streaks do |t|
      t.string :name, null:false
      t.integer :user_id, null:false
      t.integer :last_achievement_id
      t.integer :current_streak, default: 0
      t.integer :current_routine_id
      t.boolean :today

      t.timestamps
    end
    add_index :streaks, [:name, :user_id], unique: true
  end
end
