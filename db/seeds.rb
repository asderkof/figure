# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

seed_raw_data = CSV.read("db/seed_data.csv")[1..]

# Company Seed
figure = Company.create(company_name: "Figure", primary_location: "San Francisco")

# Level seed
level_data = seed_raw_data.map do |row|
    [row[2], row[3]]
end.uniq

level_data.each do |level|
    Level.create(level: level[0].to_i, level_title: level[1], company: figure)
end

# Employee

employees_raw = seed_raw_data.map do |row|
    [row[2], *row[4..11]]
end

employees_raw.each do |employee_data|
    level, location, total_yearly_compensation, base_salary, stock_grant, bonus, years_of_experience, years_at_company, gender = employee_data
    first_name = (0...8).map { (65 + rand(26)).chr }.join
    last_name = (0...8).map { (65 + rand(26)).chr }.join

    level = Level.find_by(level: level.to_i)

    Employee.create(
        full_name: "#{first_name} #{last_name}",
        location: location,
        total_yearly_compensation: total_yearly_compensation,
        base_salary: base_salary,
        stock_grant: stock_grant,
        bonus: bonus,
        years_of_experience: years_of_experience,
        years_at_company: years_at_company,
        gender: gender,
        level: level,
        company: figure,
    )
end

# Seed reports
staff = Level.find_by(level: 3, company: figure).reload.employees.first
seniors = Level.find_by(level: 2, company: figure).reload.employees.first(2)
engs = Level.find_by(level: 1, company: figure).reload.employees.first(4)

seniors.each do |senior| 
    senior.update(report: staff)
end
engs[0..1].each do |eng| 
    eng.update(report: seniors.first)
end
engs[2..3].each do |eng| 
    eng.update(report: seniors.last)
end