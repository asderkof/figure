class CreateSalaryTable < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :company_name, null: false
      t.string :primary_location

      t.timestamps
    end
    create_table :levels do |t|
      t.integer :level, null: false
      t.string :level_title, null: false

      # foreign keys
      t.integer :company_id, null: false

      t.timestamps
    end
    create_table :employees do |t|
      t.string :location
      t.string :total_yearly_compensation
      t.float :base_salary
      t.float :stock_grant
      t.float :bonus
      t.float :years_of_experience
      t.float :years_at_company
      t.string :gender

      # foreign keys
      t.integer :company_id

      t.timestamps
    end
  end
end
