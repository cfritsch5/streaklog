# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170915211322) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "achievements", force: :cascade do |t|
    t.string   "name",        null: false
    t.integer  "streak_id"
    t.integer  "user_id",     null: false
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "routines", force: :cascade do |t|
    t.integer  "streak_id",  null: false
    t.date     "start_date", null: false
    t.date     "end_date"
    t.string   "repeats",                 array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "streaks", force: :cascade do |t|
    t.string   "name",                            null: false
    t.integer  "user_id",                         null: false
    t.integer  "last_achievement_id"
    t.integer  "current_streak",      default: 0
    t.integer  "current_routine_id"
    t.boolean  "today"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.index ["name", "user_id"], name: "index_streaks_on_name_and_user_id", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.integer  "time_zone"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
