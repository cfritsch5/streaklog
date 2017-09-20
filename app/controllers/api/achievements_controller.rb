class Api::AchievementsController < ApplicationController
  def create
    if current_user
      params[:achievement][:user_id] = current_user.id
      @achievement = Achievement.new(achievement_params)
      if @achievement.save
        @achievements = current_user.achievements
        @routines = current_user.routines
        @streaks = current_user.streaks
        render 'api/streaks/index'
      else
        render json: @achievement.errors.full_messages, status: 422
      end
    end
  end

  def index
    @achievements = current_user.achievements
    @routines = current_user.routines
    @streaks = current_user.streaks
    render 'api/streaks/index'
  end

  private
  def achievement_params
    puts params
    params.require(:achievement).permit(
    :name,
    :streak_id,
    :user_id,
    :description,
    :repeats
    )
  end
end
