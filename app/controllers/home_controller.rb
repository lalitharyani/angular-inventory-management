class HomeController < ApplicationController
  def index
    
  end

  def search

  	query = params[:query]

  	products = Product.where(out_of_stock: false).where("name LIKE ? OR product_type like ?", "%#{query}%", "%#{query}%")

  	render json: products

  end

  def admin_search

  	query = params[:query]

  	products = Product.where("name LIKE ? OR product_type like ?", "%#{query}%", "%#{query}%")

  	render json: products

  end


end