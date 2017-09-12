class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['error invalid login'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @current_user
      logout
      render 'api/users/show'
    else
      render json: ['an error occured'], status: 404
    end
  end
end
