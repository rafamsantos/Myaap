class SessionsController < ApplicationController
  def create
    @user = User.find_or_create_from_auth_hash(auth_hash)
    session['user_id'] = @user.id.to_s
    redirect_to '/'
  end

  def logout
    session['user_id'] = nil
    redirect_to '/'
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end
end