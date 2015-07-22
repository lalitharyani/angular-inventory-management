class Product < ActiveRecord::Base

	validates :name, :product_type, :cost, presence: true
end