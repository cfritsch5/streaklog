class SessionsController < ApplicationController
  def create
    @user = User.find_by(
    username: params[:user][:username],
    password: params[:user][:password])

    if @user
      login(@user)
      render 'api/show'
    else
      render json: ['error invalid login'], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render 'sessions/new'
    else
      render json: ['an error occured'], status: 404
  end
end
