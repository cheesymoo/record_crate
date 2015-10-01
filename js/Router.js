App.Router = Backbone.Router.extend({
    routes: {
        'menu': 'menu',
        'game': 'game',
        'score': 'score',
        '*path': 'menu'
    },

    initialize: function() {
        this.model = {};
        this.model.game = new App.Models.game();
        this.model.album = new App.Models.album();
    },

    menu: function(){
        var view = new App.Views.menuView({
            model : this.model
        });
        $('#main').html(view.render().el);
    },

    score: function(){
        var view = new App.Views.scoreView({
            model : this.model
        });
        $('#main').html(view.render().el);
    },

    game: function(){
        var view = new App.Views.gameView({
            model : this.model
        });
        $('#main').html(view.render().el);
    }

});
