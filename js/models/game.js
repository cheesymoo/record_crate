App.Models.game = Backbone.Model.extend({
    defaults: {
        wins: 0,
        loss: 0,
        answer: ''
    },

    right: function() {
        var temp = this.get('wins');
        this.set('wins', temp + 1);
    },

    wrong: function() {
        var temp = this.get('loss');
        this.set('loss', temp + 1);
    },

    reset: function() {
        this.set(this.defaults);
    }
});
