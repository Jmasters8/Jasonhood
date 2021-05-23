# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_23_033507) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "crypto_assets", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.integer "crypto_id", null: false
    t.integer "amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["crypto_id"], name: "index_crypto_assets_on_crypto_id"
    t.index ["owner_id"], name: "index_crypto_assets_on_owner_id"
  end

  create_table "cryptocurrencies", force: :cascade do |t|
    t.string "name", null: false
    t.string "ticker", null: false
    t.integer "price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_cryptocurrencies_on_name"
    t.index ["ticker"], name: "index_cryptocurrencies_on_ticker", unique: true
  end

  create_table "stock_assets", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.integer "amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "ticker"
    t.integer "price"
    t.index ["owner_id"], name: "index_stock_assets_on_owner_id"
  end

  create_table "stocks", force: :cascade do |t|
    t.string "name", null: false
    t.string "ticker", null: false
    t.integer "price", null: false
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_stocks_on_name"
    t.index ["ticker"], name: "index_stocks_on_ticker", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.integer "buying_power", default: 0
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "watched_assets", force: :cascade do |t|
    t.integer "watcher_id", null: false
    t.string "ticker"
    t.integer "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "category"
    t.index ["watcher_id"], name: "index_watched_assets_on_watcher_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
