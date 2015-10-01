App.Views.gameView = Backbone.View.extend({

    template: '<h2> Which album is this? </h2>' +
        '<input type="button" id="boom"/>',

    initialize: function(options) {
        this.model = {};
        this.children = {};
        this.model.game = new App.Models.game();
    },

    events: {
        'click #boom' : 'getAlbum'
    },

    render: function() {
        this.$el.html(this.template);
        return this;
    },

    getAlbum: function() {
        var rand = Math.floor(Math.random() * (ALBUM_HASH.length - 1));
        this.model.album = new App.Models.Album(ALBUM_HASH[rand]);
        this.model.album.save(ALBUM_HASH[rand], {
            error: this.renderError,
            success: this.renderGuess
        });
    },

    renderGuess: function(e) {
        console.log("render the guess!");
        /*
        this.children.guessView = new App.Views.guess({
            model: {
                game: this.model.game,
                album: this.model.album
            }
        });
        $('#main').html(this.children.guessView.render().el);
        */
    },

    renderError: function(e) {
        console.log("render the eerrrror!", e);
    }
});
