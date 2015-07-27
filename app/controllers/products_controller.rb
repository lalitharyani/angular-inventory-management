class ProductsController < ApplicationController
 
	def index

    if current_user && current_user.admin?
      products = Product.all
    else
      products = Product.where(out_of_stock: false)
    end

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


  def show
    product = Product.where(id: params[:id]).first
    render json: product
  end


  def update

     product = Product.where(id: params[:id]).first

     response = {}

    if product.update(product_params)

      response['status'] = "success"
      response['msg'] = "Product updated successfully."
           
    else
      response['status'] = "error"
      response["msg"] = product.errors.full_messages.join(", ")
    end

    render json: response

  end
  

  def destroy

    product = Product.where(id: params[:id]).first

    response = {}

   if product.destroy
      response['status'] = "success"
      response['msg'] = "Product deleted successfully."
           
    else
      response['status'] = "error"
      response["msg"] = "Error while deleting the product."
    end

    render json: response

  end



	private

	def product_params
    params.require(:product).permit(:name, :product_type, :cost, :discount, :in_offer_list, :out_of_stock)
  end

end