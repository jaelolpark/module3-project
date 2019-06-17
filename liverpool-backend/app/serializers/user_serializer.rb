class UserSerializer < ActiveModel::Serializer
  has_many :posts
  has_many :comments
  has_many :likes
  attributes :id, :name
end


# EXAMPLE
# class PostSerializer < ActiveModel::Serializer
#   has_many :comments
#   attributes :title, :comments
# end