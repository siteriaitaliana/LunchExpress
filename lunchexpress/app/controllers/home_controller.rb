require 'fusion_tables'

class HomeController < ApplicationController
  
  # Connect to service    
  @ft = GData::Client::FusionTables.new      
  @ft.clientlogin('superluglor', 'lugano83')
  
  def index
  end

end
