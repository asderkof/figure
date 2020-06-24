class AddLevelIdToEmployee < ActiveRecord::Migration[6.0]
  def change
    add_column :employees, :level_id, :integer
  end
end
