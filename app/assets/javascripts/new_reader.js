window.NR = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		NR.feeds = new NR.Collections.Feeds();
		NR.feeds.fetch({
			success: function() {
				new NR.Routers.Router({$rootEl: '#content'});
				Backbone.history.start();
			}
		});
  }
};

$(document).ready(function(){
  NR.initialize();
});
