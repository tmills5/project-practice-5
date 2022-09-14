class RecipesController < ApplicationController
    require 'rest-client'

    def get_random_meals
        url = "www.themealdb.com/api/json/v2/9973533/randomselection.php"
        response = RestClient.get(url)
        render json: response
    end


end
