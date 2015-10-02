App.Models.album = Backbone.Model.extend({
    defaults: {
        album: "The Wall",
        artist: "Pink Floyd",
        cover: ''
    },

    sync: function(method, model, options) {
        api.searchAlbum(this.get('artist'), this.get('album'), 
                function(err, result) {
                    if (err !== undefined && err !== null) {
                        console.log('boot', err);
                        options.error(err);
                    } else if ( result[0].album_art_url == '' ) {
                        options.error('no album art');
                    } else {
                        this.set({'cover' : result[0].album_art_url});
                        options.success();
                    }
                }.bind(this),
                {matchMode: Gracenote.BEST_MATCH_ONLY});
    }
});
