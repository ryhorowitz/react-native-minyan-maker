class SessionsController < ApplicationController
  skip_before_action :authorized, only: :create

  def create
    # puts "I hit the sessions controller"
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      # byebug
      render json: user, status: :created
    else
      render json: { error: 'Invalid username or password' }, status: :unauthorized
    end
  end

  def destroy
    # byebug
    session[:user_id] = nil
    render status: :no_content
  end
end
