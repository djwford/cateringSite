class StaticPagesController < ApplicationController
  def home
    redirect_to "home#index"
  end

  def about
  end

  def contact
  end

  def menu
  end
end
