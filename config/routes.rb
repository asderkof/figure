Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'employees/index'
      get 'employees/create'
      get 'employees/show/:id', to: 'employees#show'
      get 'employees/destroy/:id', to: 'employees#destroy'

      get 'level/index'
    end
  end

  root 'homepage#index'
  match '*path' => 'homepage#index', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
