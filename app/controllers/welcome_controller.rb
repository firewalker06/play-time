class WelcomeController < ApplicationController
  def index
    @play_cards = PlayCard.all
  end
end
