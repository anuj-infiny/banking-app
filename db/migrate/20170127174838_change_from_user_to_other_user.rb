class ChangeFromUserToOtherUser < ActiveRecord::Migration[5.0]
  def change
  		rename_column :transactions, :to_user_id, :other_user_id
  end
end
