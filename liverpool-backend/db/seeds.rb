# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Comment.destroy_all
Like.destroy_all

User.create(name: "Jon")
User.create(name: "Caroline")
User.create(name: "Lola")
User.create(name: "Jim")
User.create(name: "Tom")

Post.create(title: "Liverpool is great!", content: "I went to Anfield and loved watching the match this weekend! So much fun!", media: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRoo8Y_jJongdcvwCiPeXMqEbkRCGMoftM9SbVbu38lhnVy7inhFiqN4zpBNeBhB3eaCjhkh00R_P6sjnV040Qfw02_gRfwYI-TjASqlsED8fPX1rkccjmCkQ&usqp=CAc", user_id: 1)
Post.create(title: "Liverpool wins again!", content: "What what what what what", media: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRoo8Y_jJongdcvwCiPeXMqEbkRCGMoftM9SbVbu38lhnVy7inhFiqN4zpBNeBhB3eaCjhkh00R_P6sjnV040Qfw02_gRfwYI-TjASqlsED8fPX1rkccjmCkQ&usqp=CAc", user_id: 2)
Post.create(title: "Everton is not so good...", content: "I went to Anfield and loved watching the match this weekend! So much fun!", media: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6X2JoB9pHzO5bL8QNHL7v9nW_IJdQrQOzdVK-GLtLwF5Fxour", user_id: 3)
Post.create(title: "Liverpool are champions of Europe!", content: "We won the Champions League for our sixth champions cup! What a season!", media: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6X2JoB9pHzO5bL8QNHL7v9nW_IJdQrQOzdVK-GLtLwF5Fxour", user_id: 4)
Post.create(title: "Liverpool wins again!", content: "What what what what what", media: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRoo8Y_jJongdcvwCiPeXMqEbkRCGMoftM9SbVbu38lhnVy7inhFiqN4zpBNeBhB3eaCjhkh00R_P6sjnV040Qfw02_gRfwYI-TjASqlsED8fPX1rkccjmCkQ&usqp=CAc", user_id: 2)

Comment.create(text: "I love to watch Liverpool too!", user_id: 1, post_id: 2)
Comment.create(text: "Great team", user_id: 2, post_id: 1)
Comment.create(text: "Awwwww yeahhhhhh!", user_id: 3, post_id: 2)
Comment.create(text: "Meow", user_id: 4, post_id: 3)
Comment.create(text: "I love to watch Liverpool too!", user_id: 1, post_id: 3)

Like.create(user_id: 1, post_id: 2)
Like.create(user_id: 1, post_id: 3)
Like.create(user_id: 1, post_id: 4)
Like.create(user_id: 2, post_id: 1)
Like.create(user_id: 2, post_id: 3)
Like.create(user_id: 2, post_id: 4)
Like.create(user_id: 4, post_id: 1)


# Board.create(name: "Matt", size: 2, surfer_id: 1)

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