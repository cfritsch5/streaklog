class Api::StreaksController < ApplicationController

  def create
  end

  def update
    @streak = Streak.find(:id)
    @streak.continued?(params[:achievement_id])
    @streak.last_achievement_id = params[:achievement_id]
  end

  private
  def streak_params
    params.require[:streak].permit(:achievement_id, )
  end
end
