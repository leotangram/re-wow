Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :medical_records
    end
  end
end
