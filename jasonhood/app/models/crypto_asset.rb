class CryptoAsset < ApplicationRecord

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: "User"

  belongs_to :cryptocurrency,
    foreign_key: :crypto_id,
    class_name: "Cryptocurrency"
end
