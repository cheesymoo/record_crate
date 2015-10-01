App.Models.game = Backbone.Model.extend({
    defaults: {
        wins: 0,
        loss: 0,
        guess: '',
        answer: ''
    }
});
