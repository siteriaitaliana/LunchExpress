class HomeController < ApplicationController
  
  def index
  end
  
  def shopList
    @shoplist = params[:id] 
  end

end
