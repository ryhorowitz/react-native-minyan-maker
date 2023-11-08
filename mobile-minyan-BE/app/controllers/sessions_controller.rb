class SessionsController < ApplicationController
  skip_before_action :authorized, only: :create

  def create
    # puts "I hit the sessions controller"
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: 'Invalid username or password' }, status: :unauthorized
    end
  end

  def destroy
    reset_session
    render status: :no_content
  end
end
