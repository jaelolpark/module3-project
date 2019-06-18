class CommentsController < ApplicationController
  def index
    @comments = Comment.all
    render json: @comments
  end
  
  def show
    @comment = Comment.find(params[:id])
    render json: @comment, status: :ok
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render json: @comment, status: :created
    else  
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  private 
  def comment_params
    params.permit(:text, :user_id, :post_id)
  end
end
