App.Views.guessView = Backbone.View.extend({

    template: '<img src=""></img>',

    initialize: function(options) {
    },

    render: function() {
        console.log('render guess');
        this.$el.html(this.template);
        return this;
    }
});
