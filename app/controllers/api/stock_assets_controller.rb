class Api::StockAssetsController < ApplicationController

  def create
    @asset = StockAsset.new(stock_asset_params)
    if @asset.save
      render :show
    else
      render json: @asset.errors.full_messages, status: 422
    end
  end

  def destroy
    @asset = StockAsset.find_by(id: params[:id])
    @asset.destroy
    render :show
  end


  private
  def stock_asset_params
    params.require(:stock_asset).permit(:owner_id, :ticker, :amount, :price)
  end
end


#add price in schem,a