NR.Collections.Entries = Backbone.Collection.extend({
	initialize: function (models, options) {
		this.feed_id = options.feed_id;
	},

	url: function () {
		return "/feeds/" + this.feed_id + "/entries";
	},

	model: NR.Models.Entry
});