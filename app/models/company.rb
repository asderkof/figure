class Company < ApplicationRecord
    has_many :levels
    has_many :employees
end
