class PropertiesController < ApplicationController
  before_action :set_property, only: [:show, :update, :destroy]
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response

  # GET /properties
  def index
    @properties = Property.all
    render json: @properties
  end

  # GET /properties/1
  def show
    render json: @property, serializer: PropertyOwnerSerializer
  end

  # POST /properties
  def create
    @property = Property.create!(property_params)
    render json: @property, status: :created
  end

  # PATCH/PUT /properties/1
  def update
    if @property.update(property_params)
      render json: @property
    else
      render json: @property.errors, status: :unprocessable_entity
    end
  end

  # DELETE /properties/1
  def destroy
    @property.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_property
      @property = Property.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def property_params
      params.permit(:name, :location, :description, :image_url, :price, :no_of_bedrooms, :no_of_bathrooms,:user_id, :sold)
    end

    #Invalid_Records
    def record_invalid(e)
      render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end

    def record_not_found_response
      render json: {error: "Record Not Found"}, status: :not_found
    end
end
