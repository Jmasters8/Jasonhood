class Api::StockAssetsController < ApplicationController

  def create
    @asset = StockAsset.new(stock_asset_params)
    if @asset.save
      render :show
    else
      render json: @asset.errors.full_messages, status: 422
    end
  end

  def update
    @asset = StockAsset.find_by(id: params[:id])
    # p @asset
    @asset.amount = params[:amount].to_i

    if @asset.amount >= 0
      @asset.save
      render :show
    else
      render json: ['unable to process request']
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

