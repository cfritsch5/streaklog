class CreateRoutines < ActiveRecord::Migration[5.0]
  def change
    create_table :routines do |t|
      t.integer :streak_id, null:false
      t.date  :start_date, null:false
      t.date :end_date
      t.string :repeats, array: true
      
      t.timestamps
    end
  end
end
