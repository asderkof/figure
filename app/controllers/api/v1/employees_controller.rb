class Api::V1::EmployeesController < ApplicationController
  def index
    employees = Employee.all
    render json: employees.as_json(include: :report)
  end

  def create
  end

  def show
    employee = Employee.find(params[:id])
    if employee
      render json: employee.as_json(include: [:report, :subordinates])
    else
      render json: "Employee not found"
    end
  end

  def destroy
  end
end
