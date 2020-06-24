class AddDataToEmployee < ActiveRecord::Migration[6.0]
  def change
    add_column :employees, :report_id, :integer
    add_column :employees, :full_name, :string
  end
end
