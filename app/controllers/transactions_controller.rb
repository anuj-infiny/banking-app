class TransactionsController < ApplicationController
  before_action :authenticate_user!
  respond_to :html, :json

  	def index
  		@transactions = Transaction
  		.where(user: current_user)
  		.joins("LEFT JOIN `users` ON transactions.to_user_id = users.id")
  		.or(Transaction.where(to_user_id: current_user.id).joins("LEFT JOIN `users` ON transactions.to_user_id = users.id"))
  		.select("transactions.*, users.email")


  		render json: @transactions
  	end

  	def dashboard
  		redirect_to '/dashboard/index.html'
  	end

	def create
		@params = post_params
		if @params['tranType'] > 0 and @params['tranType'] < 4 and @params['amount'] > 0
			@transaction = Transaction.new(@params)
		  	@transaction.user = current_user
			case @params['tranType']
			when 1
			  print('It is a deposit')
			when 2
			  @transaction.amount = @transaction.amount * -1
			when 3
			  @transaction.amount = @transaction.amount * -1
			  @user = User.find_by email: params[:to_user]
			  if @user
			  	@transaction.to_user_id = @user.id
			  else
			  	render json: { "error" => 'Invalid user' }, :status => :service_unavailable  and return
			  end
			else
			  render json: { "error" => 'Invalid transaction type' }, :status => :service_unavailable  and return
			end
			
		  	if @transaction.save
		  		render json: @transaction
		  	else
				render json: { "error" => 'Invalid transaction' }, :status => :service_unavailable  and return
			end
		else
			render json: { "error" => 'Invalid transaction' }, :status => :service_unavailable  and return
		end

	end

	def balance
		@amount = Transaction.where(user: current_user).sum(:amount)
		render json: { "amount" => @amount }
	end

	def post_params
	  params.require(:transaction).permit(:amount, :tranType)
	end
end
