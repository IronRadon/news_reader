NR.Views.EntryShowView = Backbone.View.extend({
	events:{},

	template: JST["entries/show"],

	render: function () {
		var view = this;

		var renderedContent = view.template( {entry: view.model} );
		view.$el.html(renderedContent);
		return view;
	}

});