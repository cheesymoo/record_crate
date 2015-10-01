App.Router = Backbone.Router.extend({
    routes: {
        'menu': 'menu',
        'game': 'game',
        'score': 'score',
        '*path': 'menu'
    },

    menu: function(){
        var view = new App.Views.menuView();
        $('#main').html(view.render().el);
    },

    score: function(){
        var view = new App.Views.scoreView();
        $('#main').html(view.render().el);
    },

    game: function(){
        var view = new App.Views.gameView();
        $('#main').html(view.render().el);
    }

});
