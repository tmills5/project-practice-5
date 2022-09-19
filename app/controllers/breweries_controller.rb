class BreweriesController < ApplicationController
    def index
        render json: Brewery.all.order(:id)
    end
end
