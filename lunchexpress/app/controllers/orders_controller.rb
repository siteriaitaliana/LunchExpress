class OrdersController < ApplicationController
  
  def index  
    @orders = Order.all(:order => "created_at DESC")  
    respond_to do |format|  
      format.html  
    end  
  end
    
end
