NR.Views.EntriesIndexView = Backbone.View.extend({
	initialize: function () {
		this.listenTo(this.model.get('entries'), "add remove change reset", this.render);
	},

	events: {
		"click button.refresh" : "refresh"
	},

	template: JST["entries/index"],

	render: function () {
		var view = this;
		var renderedContent = this.template({
			feed: view.model
		});
		// console.log(view.model);
		view.$el.html(renderedContent);

		return view;
	},


	refresh: function (event) {
		event.preventDefault();
		this.model.get('entries').fetch();
	}
});