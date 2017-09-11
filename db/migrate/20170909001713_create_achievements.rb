class CreateAchievements < ActiveRecord::Migration[5.0]
  def change
    create_table :achievements do |t|
      t.string :achievement, null: false
      t.integer :user_id, null: false
      t.string :description
      t.integer :difficulty
      t.string :notes
      t.string :tags, array: true

      t.timestamps
    end

    add_index :achievements, :achievement
    add_index :achievements, :user_id
  end
end
