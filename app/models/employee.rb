class Employee < ApplicationRecord
    has_many :subordinates, class_name: "Employee",
    foreign_key: "report_id"
    belongs_to :report, class_name: "Employee", optional: true
    belongs_to :level
    belongs_to :company
end
