App.Views.menu = Backbone.View.extend({

    template : '<h1> Can you guess the album? </h1>' +
        '<a href="#game">Start!</a>',

    initialize: function(options) {},

    render: function() {
        this.$el.html(this.template);
        return this;
    }
});
