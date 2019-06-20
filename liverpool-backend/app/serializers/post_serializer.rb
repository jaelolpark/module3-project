class PostSerializer < ActiveModel::Serializer
    belongs_to :user
    has_many :comments
    has_many :likes
    attributes :id, :title, :content, :media, :user_id
end