Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'employees/index'
      get 'employees/create'
      get 'employees/show'
      get 'employees/destroy'
    end
  end
  root 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
