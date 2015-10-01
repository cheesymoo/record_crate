App.Models.buttons = Backbone.Model.extend({
    defaults: {
        buttons: ['zero','one','two','three'], // array of button text
        correct: 0 // which button is correct?
    },

    initialize: function() {
    },

    makeButtons: function(hash_num) { // take hash number of correct album, choose the rest
        console.log('make buttons');
        // shuffle an array 0-3, first # is correct, rest are bogus
    }
});
