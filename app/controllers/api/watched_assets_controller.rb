class Api::WatchedAssetsController < ApplicationController

  def create
    @watched_asset = WatchedAsset.new(watched_asset_params)
    if @watched_asset.save
      render :show
    else
      render json: @watched_asset.errors.full_messages, status: 422
    end
  end

  def destroy
    @watched_asset = WatchedAsset.find_by(id: params[:id])
    @watched_asset.destroy
    render :show
  end

  private
  def watched_asset_params
    params.require(:watched_asset).permit(:watcher_id, :ticker, :price, :category, :emoji)
  end
end