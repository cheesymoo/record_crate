App.Views.scoreView = Backbone.View.extend({

    initialize: function(options) {},

    events: {
        'click #reset' : 'reset'
    },

    render: function() {
        var template = '<h1> Current Tally </h1>' +
            '<table><tr><td># You chose wisely</td><td># You chose poorly</td></tr>' +
            '<tr><td>' + this.model.game.get('wins') + '</td><td>' +
            this.model.game.get('loss') + '</td></tr></table>' +
            '<ul><li><input type="button" id="reset" value="Reset score?"/></li>' +
            '<a href="#game">Back to game?</a></li></ul>';
        this.$el.html(template);
        return this;
    },

    reset: function() {
        this.model.game.reset();
        this.render();
    }

});
