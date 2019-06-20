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

  # def destroy
  #   @post = Post.find(params[:id])
  #   @post.destroy
  #   render json: @post, status: :ok
  # end 

  def destroy
    @post = Post.find(params[:id])
    unless @post.nil?
      @post.destroy
      render json: @post
    else
      render json: { error: "Post not Found!" }, status: 404
    end
  end

  private 
  def post_params
    params.require(:post).permit(:title, :content, :media, :user_id)
  end
end