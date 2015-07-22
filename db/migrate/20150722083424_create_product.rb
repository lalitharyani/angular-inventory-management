class CreateProduct < ActiveRecord::Migration
  def change
    create_table :products do |t|
    	t.string :name
    	t.string :product_type
    	t.float :cost
    	t.float :discount
    	t.boolean :in_offer_list, default: false
    	t.boolean :out_of_stock, default: false
    end
  end
end
