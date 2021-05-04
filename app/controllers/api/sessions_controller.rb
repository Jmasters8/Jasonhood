class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user.nil?
      render json: ['Unable to log in with provided credentials'], status: 401
    else
      login!(@user)
      render '/api/users/show'
    end
  end

  def destroy
    @user = current_user
    if current_user
      logout!
      render '/api/users/show'
    else
      render json: ['Unable to log out']
    end
  end
end
