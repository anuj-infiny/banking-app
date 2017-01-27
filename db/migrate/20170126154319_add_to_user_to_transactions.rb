class AddToUserToTransactions < ActiveRecord::Migration[5.0]
  def change
    add_reference :transactions, :to_user, index: true
  end
end
