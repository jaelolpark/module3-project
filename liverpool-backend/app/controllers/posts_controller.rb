class PostsController < ApplicationController
  def index
    @posts = Post.all
    render json: @posts, status: :ok
  end

  def show
    @post = Post.find(params[:id])
    render json: @post, status: :ok
  end

  def create
    # byebug
    @post = Post.new(post_params)
    if @post.save
      render json: @post, status: :created
    else  
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end

  private 
  def post_params
    params.require(:post).permit(:title, :content, :media, :user_id)
  end
end

  ## Example: Get a user and their animals
  ## def show (in a users controller)
  ##   @user = User.find(params[:id])
  ##   render json: @user.profile_json, status: :ok
  ## end