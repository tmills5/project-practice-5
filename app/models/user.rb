class User < ApplicationRecord
    has_secure_password

    has_many :posts, dependent: :destroy
    has_many :comments, dependent: :destroy

    
    validates :email, presence: true
    validates :username, presence: true
end
