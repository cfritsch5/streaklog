class CreateRoutines < ActiveRecord::Migration[5.0]
  def change
    create_table :routines do |t|
      t.string :name, null: false
      t.array :repeats, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :routines, :name
    add_index :routines, :user_id
  end
end
