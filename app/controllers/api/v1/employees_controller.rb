class Api::V1::EmployeesController < ApplicationController
  def index
    employees = Employee.all
    render json: employees
  end

  def create
  end

  def show
    employee = Employee.find(params[:id])
    if employee
      render json: employee
    else
      render json: "Employee not found"
    end
  end

  def destroy
  end
end
