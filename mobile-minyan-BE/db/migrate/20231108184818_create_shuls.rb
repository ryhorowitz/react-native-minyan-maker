class CreateShuls < ActiveRecord::Migration[7.0]
  def change
    create_table :shuls do |t|
      t.string :name
      t.string :street_address
      t.string :city
      t.string :state
      t.string :postal_code
      t.string :img
      t.string :contact_email

      t.timestamps
    end
  end
end
