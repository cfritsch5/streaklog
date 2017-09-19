class Api::RoutinesController < ApplicationController

  # def create
  #   @routine = Routine.new(routine_params)
  #
  #   if @routine.save
  #     render api/routines/show
  #   else
  #     render json: @routines.errors.full_messages, status: 422
  #   end
  # end
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
  # private
  # def routine_params
  #   params.require(:routine).permit(
  #   :name,
  #   :repeats,
  #   :user_id,
  #   :achievement_id
  #   )
  # end
end
