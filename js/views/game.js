App.Views.gameView = Backbone.View.extend({
    initialize: function() {
        Backbone.View.prototype.initialize.apply(this, arguments);
        this.model.buttons = new App.Models.buttons({});
    },

    events: {
        'click #boom' : 'getAlbum',
        'click #guess': 'check'
    },

    render: function() {
        this.$el.html(this.template);
        return this;
    },

    getAlbum: function() {
        var rand = Math.floor(Math.random() * (ALBUM_HASH.length - 1));
        this.model.buttons.makeButtons(rand);
        this.model.game.set('answer', rand);
        this.model.album.save(ALBUM_HASH[rand], {
            error: this.renderError,
            success: this.renderGuess.bind(this)
        });
    },

    renderGuess: function(e) {
        var playTemplate = '<h2> Which album is this? </h2>' +
            '<img src="' + this.model.album.get('cover') + '"/>';
        this.$el.html(playTemplate);
        setTimeout(this.showButtons.bind(this), 1200);
    },

    showButtons: function() {
        var buttonsTemplate = '<ul>';
        var buttons = this.model.buttons.get('buttons');
        for (var i = 0; i < 4; i++) {
            buttonsTemplate += '<li><input type="button" id="guess" value="' + 
                buttons[i] + '"/></li>';
        }
        this.$el.html(buttonsTemplate + '</ul>');
    },

    check: function(e) {
        var guess = e.target.value;
        var string;
        if (guess == ALBUM_HASH[this.model.game.get('answer')].album)
        {
            this.model.game.right();
            string = 'Correct!'
        }
        else
        {
            this.model.game.wrong();
            string = 'Wrong!';
        }
        var temp = '<h1>' + string + '</h1>' +
            '<input type="button" id="boom" value="Go Again?">';
        this.$el.html(temp);
    },

    renderError: function(e) {
        console.log("error: ", e);
        var temp = '<h1> Whoops! Something went wrong... </h1>' +
        '<input type="button" id="boom" value="Go Again?">';
        this.$el.html(temp);
    },

    template: '<h2> Ready? </h2>' +
        '<input type="button" id="boom" value="Go!"/>'
});
