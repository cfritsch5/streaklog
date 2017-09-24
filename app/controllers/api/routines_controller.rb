class Api::RoutinesController < ApplicationController

  def create
    params[:routine][:user_id] = current_user.id
    @routine = Routine.new(routine_params)
    @streak = Streak.new(user_id:user_id, name:name)
    if @routine.save
      render api/routines/show
    else
      render json: @routines.errors.full_messages, status: 422
    end
  end
  #
  # def destroy
  # end
  #
  # def update
  #   @routine = Routine.find_by(params[:id])
  #
  #   @routine.update_attributes(routine_params)
  # end

  # def index
  #   @routines = current_user.routines
  # end
  #
  private
  def routine_params
    params.require(:routine).permit(
    :name,
    :repeats,
    :user_id,
    :achievement_id,
    :streak_id
    )
  end
end
