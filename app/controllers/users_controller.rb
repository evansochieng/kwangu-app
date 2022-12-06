class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
 rescue_from ActiveRecord::RecordInvalid, with: :invalid_record_response
 rescue_from ActiveRecord::RecordNotFound, with: :user_not_found


  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  # GET /users/1
  def show
     @user = User.find_by(id: session[:user_id])
     if @user
      render json: @user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  # POST /users
  def create
    @user = User.create!(user_params)
    # session[:user_id] = @user.id
    render json: @user, status: :created
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:name, :contact, :username, :password,:password_confirmation)
    end

    def invalid_record_response(e)
      render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end

    def user_not_found
      render json: {error: "User not found" }, status: :not_found
    end
end
