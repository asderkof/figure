class Api::V1::LevelController < ApplicationController
    def index
        levels = Level.all
        render json: levels.as_json(include: :employees)
    end
end
