NR::Application.routes.draw do
  resources :feeds, only: [:index, :new, :create, :show] do
    resources :entries, only: [:index, :show]
  end

  root to: "feeds#index"
end
