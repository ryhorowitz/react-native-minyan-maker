class CreateUserServices < ActiveRecord::Migration[7.0]
  def change
    create_table :user_services do |t|
      t.integer :user_id
      t.integer :service_id

      t.timestamps
    end
  end
end
