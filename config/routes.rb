Rails.application.routes.draw do
	root to: 'transactions#dashboard'
	devise_for :users
	get '/dashboard', :to => redirect('/dashboard/index.html')
	scope(:path => '/api') do

		  get 'transactions/balance', :to => 'transactions#balance'
		  resources :transactions
	end
end
