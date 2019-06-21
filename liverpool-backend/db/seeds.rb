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

user1 = User.create(name: "Jon")
user2 = User.create(name: "Caroline")
user3 = User.create(name: "Lola")
user4 = User.create(name: "Jae")
user5 = User.create(name: "Tom")

post4 = Post.create(title: "Liverpool are champions of Europe!", content: "We won the Champions League for our sixth champions cup! What a season!", media: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2srv9uCO9EfIIC20blBu1DdJfAhvDSKTsggm0Hm_Sy6E5vxFx2A", user: user4)
post1 = Post.create(title: "Liverpool is great!", content: "I went to Anfield and loved watching the match this weekend! So much fun!", media: "https://wallpaperbro.com/img/396220.jpg", user: user1)
post2 = Post.create(title: "Liverpool wins again!", content: "The Kop!", media: "https://talksport.com/wp-content/uploads/sites/5/2019/02/GettyImages-962739688.jpg?strip=all&w=960&quality=100", user: user2)
post3 = Post.create(title: "Sorry Barca...", content: "Origi was so clutch against Barcelona last night!", media: "https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/liverpool-v-barcelona-uefa-champions-league-semi-final-second-leg-5cdd892c20e3ab8f07000001.jpg", user: user3)
post5 = Post.create(title: "Liverpool's Champions League Parade!", content: "It was awesome to check out Liverpool's Champions League celebration! The whole city was in attendance!", media: "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fplayingfor90.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F1147640013.jpeg&c=sc&w=850&h=560", user: user2)
post6 = Post.create(title: "Anfield...", content: "The stadium is starting to fill up today!", media: "https://upload.wikimedia.org/wikipedia/commons/0/02/Panorama_of_Anfield_with_new_main_stand_%2829676137824%29.jpg", user: user4)

Comment.create(text: "I love to watch Liverpool too!", user: user1, post: post2)
Comment.create(text: "Great team", user: user2, post: post1)
Comment.create(text: "Awwwww yeahhhhhh!", user: user3, post: post2)
Comment.create(text: "Meow", user: user4, post: post3)
Comment.create(text: "I love to watch Liverpool too!", user: user1, post: post3)

Like.create(user: user1, post: post2)
Like.create(user: user1, post: post3)
Like.create(user: user1, post: post4)
Like.create(user: user2, post: post1)
Like.create(user: user2, post: post3)
Like.create(user: user2, post: post4)
Like.create(user: user4, post: post1)


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