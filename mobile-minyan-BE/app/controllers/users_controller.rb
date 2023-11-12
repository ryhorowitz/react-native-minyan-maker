class UsersController < ApplicationController
  # include SignupNotifier
  skip_before_action :authorized, only: :create
  # after_action :notify_new_user, only: :create

  def show
    render json: current_user
  end

  def create
    @user = User.create!(user_params)
    
    session[:user_id] = @user.id
    # byebug
    render json: @user, status: :created
    # render json: {message: 'you hit the create user method'}
  end

  def update
    current_user.update!(user_params)
    render json: current_user, status: :ok
  end

  def destroy
    current_user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:username, :email, :password, :password_confirmation)
  end
end
  

