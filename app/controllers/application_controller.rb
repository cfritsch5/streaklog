class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :require_logged_in, :logged_in?
  around_filter :user_time_zone, if: :current_user

  def user_time_zone(&block)
    Time.use_zone(current_user.time_zone, &block)
  end

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    render json: {base: ['invalid credentials']}, status: 401 if !current_user
  end
end
