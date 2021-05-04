class Cryptocurrency < ApplicationRecord

  has_many :crypto_assets,
    foreign_key: :crypto_id,
    class_name: "CryptoAsset"

  has_many :owners,
    through: :crypto_assets,
    source: :owner
end
