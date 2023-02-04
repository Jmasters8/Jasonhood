class User < ApplicationRecord

  attr_reader :password

  validates :first_name, :last_name, :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
  validates :password, length: { minimum: 10 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :stock_assets,
    foreign_key: :owner_id,
    class_name: "StockAsset"

  has_many :watched_assets,
    foreign_key: :watcher_id,
    class_name: "WatchedAsset"
  
  has_many :crypto_assets,
    foreign_key: :owner_id,
    class_name: "CryptoAsset"


  has_many :stocks,
    through: :assets, #stock_assets
    source: :stock

  has_many :cryptocurrency,
    through: :assets,
    source: 

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password

    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  # def self.find_by_credentials(email, password)
  #   user = User.find_by(email: email)
  #   return nil unless user
  #   user.is_password?(password) ? user : nil
  # end

  def self.find_by_crendentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end


end
