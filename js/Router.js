App.Router = Backbone.Router.extend({
    routes: {
        'menu': 'menu',
        'game': 'game',
        'score': 'score',
        '*path': 'menu'
    },

    menu: function(){
        var view = new App.Views.menu();
        $('#main').html(view.render().el);
    },

    score: function(){
        var view = new App.Views.score();
        $('#main').html(view.render().el);
    },

    game: function(){
        var view = new App.Views.game();
        $('#main').html(view.render().el);
    }

});
