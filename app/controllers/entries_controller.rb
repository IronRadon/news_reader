class EntriesController < ApplicationController
  def index
    feed = Feed.find(params[:feed_id])
    feed.reload if feed.updated_at < 5.seconds.ago
    render :json => feed.entries
  end
end
