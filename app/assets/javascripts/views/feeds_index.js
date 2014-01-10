NR.Views.FeedsIndexView = Backbone.View.extend({
	events: {
		"click input[type=submit]":"submit"
	},

	initialize: function () {
		this.listenTo(this.collection, "all", this.render);
	},

	template: JST["feeds/index"],

	render: function () {
		var renderedContent = this.template( {feeds: NR.feeds} );
		this.$el.html(renderedContent);

		return this;
	},

	submit: function (event) {
		event.preventDefault();
		var attributes = $(event.target.form).serializeJSON();
		this.collection.create(attributes);
	}

});