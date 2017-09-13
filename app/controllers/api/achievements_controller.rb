class Api::AchievementsController < ApplicationController
  def create
    @achievement = Achievement.new(achievement_params)
    if @achievement.save
      render 'api/achievements/show'
    else
      render json: @achievement.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  def update
  end

  def index
    @achievements = current_user.achievements
    @routines = current_user.routines
    @streaks = []
    @achievements.each do |achv|
      if achv.routine
        @streaks.push({achievement: achv.id, routine: achv.routine.id})
      end
    end
    # p "STREAKS!!!!!!!!!!!", @streaks
  end

  private
  def achievement_params
    params.require(:achievement).permit(
    :achievement,
    :user_id,
    :description,
    :difficulty,
    :notes,
    :tags
    )
  end
end
