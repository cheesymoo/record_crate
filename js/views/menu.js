App.Views.menuView = Backbone.View.extend({

    template : '<h1> Welcome to a big pile of records. </h1>' +
        '<a id="boom" href="#game">Start!</a>',

    initialize: function(options) {},

    render: function() {
        this.$el.html(this.template);
        return this;
    }
});
