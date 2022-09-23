class BreweriesController < ApplicationController
    wrap_parameters format: []
    
    def index
        breweries = Brewery.all
        render json: breweries, include: ['comments', 'comment.user.username']
    end

    def show
        brewery = find_brewery
        if brewery
        render json: brewery
        else
        render json: {error: "Brewery Not Found"}, status: :not_found
        end
    end

    def search_breweries
        # byebug
        breweries = Brewery.all.select { |b| brewery.include? params[:searchQuery]}
        render json: breweries

    end

private

    def find_brewery
        Brewery.find(params[:id])
    end

end
