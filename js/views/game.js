App.Views.game = Backbone.View.extend({

    template: '<h2> Which album is this? </h2>' +
        '<input type="button" id="boom"/>',

    initialize: function(options) {},

    events: {
        'click #boom' : 'getAlbum'
    },

    render: function() {
        this.$el.html(this.template);
        return this;
    },

    getAlbum: function() {
        var rand = Math.floor(Math.random() * (ALBUM_HASH.length - 1));
        var album = new App.Models.Album(ALBUM_HASH[rand]);
        album.save(ALBUM_HASH[rand], {
            success: function() {
                console.log('play ball!');
            },
            error: function() {
                console.log('to err is hu-man');
            }
        });
    }
});
