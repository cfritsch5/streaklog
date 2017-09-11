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

ActiveRecord::Schema.define(version: 20170909213755) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "achievements", force: :cascade do |t|
    t.string   "achievement", null: false
    t.integer  "user_id",     null: false
    t.string   "description"
    t.integer  "difficulty"
    t.string   "notes"
    t.string   "tags",                     array: true
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["achievement"], name: "index_achievements_on_achievement", using: :btree
    t.index ["user_id"], name: "index_achievements_on_user_id", using: :btree
  end

  create_table "routines", force: :cascade do |t|
    t.string   "name",           null: false
    t.string   "repeats",        null: false, array: true
    t.integer  "user_id",        null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.integer  "achievement_id"
    t.index ["name"], name: "index_routines_on_name", using: :btree
    t.index ["user_id"], name: "index_routines_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "session_token",   null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
