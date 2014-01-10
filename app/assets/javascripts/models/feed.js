NR.Models.Feed = Backbone.Model.extend({
	parse: function (data) {
	  var entries = data.entries;
		data.entries = new NR.Collections.Entries(entries, {
			feed_id: data.id
		});
		return data;
	},

	to_JSON: function () {
	  var data = _.clone(this.attributes);
		data.entries = this.get('entries').to_JSON();
		return data;
	},

	url: function(){
		if(this.id) {
		  return "/feeds/" + this.id + "/entries";
		} else {
			return "/feeds"
		}
	}

});