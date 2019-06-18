class LikesController < ApplicationController
  def index
    @likes = Like.all
    render json: @likes
  end
  
  def show
    @like = Like.find(params[:id])
    render json: @like, status: :ok
  end

  def create
    @like = Like.new(like_params)
    if @like.save
      render json: @like, status: :created
    else  
      render json: @like.errors.full_messages, status: :unprocessable_entity
    end
  end

  private 
  def like_params
    params.permit(:user_id, :post_id)
  end
end
