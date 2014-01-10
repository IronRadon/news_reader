class FeedsController < ApplicationController
  def index
    respond_to do |format|
      format.html { render :index }
      format.json do
        @feeds = Feed.all

        render :json => @feeds.to_json(:include => :entries)
      end
    end
  end

  def create
    feed = Feed.find_or_create_by_url(params[:feed][:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  def show
    feed = Feed.find_or_create_by_url(params[:feed][:url])
    if feed
      render :json => feed.entries
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  # def new
  #   respond_to do |format|
  #     format.html { render :new }
  #     format.json do
  #       @feed = Feed.new
  #
  #       render :json => @feed.to_json
  #     end
  #   end
  # end

end
