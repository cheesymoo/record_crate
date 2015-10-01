var ALBUM_HASH = [ 
    { 
        artist: 'Metallica',
        album: 'Ride the Lightning'
    },
    {
        artist: 'Primus',
        album: 'Frizzle Fry'
    },
    { 
        artist: 'Led Zeppelin',
        album: 'Houses of the Holy'
    },
    { 
        artist: 'Townes Van Zandt',
        album: 'Delta Mamma Blues'
    },
    { 
        artist: 'Shabazz Palaces',
        album: 'Lese Majesty'
    },
    { 
        artist: 'Raymond Scott',
        album: 'Manhattan Research, Inc.'
    },
    { 
        artist: 'Bruce Haack',
        album: 'Farad: The Electric Voice'
    },
    { 
        artist: 'Sonny Sharrock',
        album: 'Ask the Ages'
    },
    {
        artist: 'Funkadelic',
        album: 'Maggot Brain'
    },
    {
        artist: 'Robert Ellis',
        album: 'Photographs'
    },
    {
        artist: "Sarah Ruth",
        album: "Words on the Wind"
    },
    {
        artist: 'Sam Cooke',
        album: 'A Change is Gonna Come'
    },
    {
        artist: 'Zs',
        album: 'Arms'
    }
];

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
