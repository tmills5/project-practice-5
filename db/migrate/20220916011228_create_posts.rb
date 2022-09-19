class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :post_title

      t.text :post_content

      t.timestamps
    end
  end
end
