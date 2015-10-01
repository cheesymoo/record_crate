App.Views.score = Backbone.View.extend({

    initialize: function(options) {},

    render: function() {
        this.$el.html("<h1>You are in last place, loser!</h1>");
        return this;
    }
});
