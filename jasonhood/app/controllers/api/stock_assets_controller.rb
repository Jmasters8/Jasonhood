class Api::StockAssetsController < ApplicationController

  def create
    @asset = StockAsset.new(stock_asset_params)
    if @asset.save
      render :show
    else
      render json: @assets.errors.full_messages, status: 422
    end
  end


  private
  def stock_asset_params
    params.require(:stock_asset).permit(:user_id, :stock_id, :amount)
  end
end
