NR.Routers.Router = Backbone.Router.extend({

	initialize: function(object){
		this.$rootEl = object.$rootEl;
	},

	routes: {
		"":"feedsIndex",
		"feeds":"feedsIndex",
		"feeds/:id":"entriesIndex",
		"feeds/:id/entries":"entriesIndex",
		"feeds/:feed_id/entries/:id":"entryShow"
	},

	feedsIndex: function () {
		var view = new NR.Views.FeedsIndexView({
			collection: NR.feeds
		});
		this._swapView(view);
	},

	entriesIndex: function(id) {
		var feed = NR.feeds.get(id);
		var view = new NR.Views.EntriesIndexView({
			model: feed
		});
		this._swapView(view);
	},

	entryShow: function(feed_id, id) {
		var that = this;
		var entries = new NR.Collections.Entries([], {feed_id: feed_id});
		entries.fetch({
			success: function() {
				var entry = entries.get(id);
				var view = new NR.Views.EntryShowView({
					model: entry
				});
				that._swapView(view);
			}
		});
	},

	_swapView: function(view){
		this._currentView && this._currentView.remove();
		this._currentView = view;
		$('#content').html(this._currentView.render().$el);
	}

});