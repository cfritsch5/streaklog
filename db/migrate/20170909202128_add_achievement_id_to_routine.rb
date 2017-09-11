class AddAchievementIdToRoutine < ActiveRecord::Migration[5.0]
  def change
    add_column :routines, :achievement_id, :integer
  end
end
