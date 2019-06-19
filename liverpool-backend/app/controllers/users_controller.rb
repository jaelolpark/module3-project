class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @user   = User.find_by(user_params)
    @user ||= User.new(user_params)
    if @user.save
      render json: @user, status: :created
    else  
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  private 
  def user_params
    params.permit(:name)
  end
end
