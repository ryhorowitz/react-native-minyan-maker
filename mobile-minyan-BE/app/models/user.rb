class User < ApplicationRecord
  has_secure_password
  has_many :user_services
  has_many :services, through: :user_services

  validates :username, length: { in: 5..20 }, uniqueness: true
  validates :email, presence: true,
                    format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i, message: 'is not a valid email format' }
end