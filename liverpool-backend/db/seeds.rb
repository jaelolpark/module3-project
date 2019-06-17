# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create("Jon")

# create_table "comments", force: :cascade do |t|
#     t.string "text"
#     t.integer "user_id"
#     t.integer "post_id"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#   end

#   create_table "likes", force: :cascade do |t|
#     t.integer "user_id"
#     t.integer "post_id"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#   end

#   create_table "posts", force: :cascade do |t|
#     t.string "title"
#     t.string "content"
#     t.string "media"
#     t.integer "user_id"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#   end

#   create_table "users", force: :cascade do |t|
#     t.string "name"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#   end