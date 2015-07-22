class ProductsController < ApplicationController
 
	def index
    products = Product.all
    render json: products
  end

  def new
  end

  def create

  	product = Product.new(product_params)

  	response = {}

    if product.save
      response['status'] = "success"
      response['msg'] = "Product created successfully."
           
    else
      response['status'] = "error"
      response["msg"] = product.errors.full_messages.join(", ")
    end

    render json: response
  end


	private

	def product_params
    params.require(:product).permit(:name, :product_type, :cost, :discount, :in_offer_list, :out_of_stock)
  end

end