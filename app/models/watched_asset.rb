class WatchedAsset < ApplicationRecord

  belongs_to :watcher,
    foreign_key: :watcher_id,
    class_name: "User"
    
end
