App.Models.Album = Backbone.Model.extend({
    defaults: {
        album: "The Wall",
        artist: "Pink Floyd",
        cover: ''
    },

    urlRoot: '',

    sync: function(method, model, options) {
        var data;
        api.searchAlbum(this.get('artist'), this.get('album'), 
                function(err, result) {
                    console.log('Res: ', result);
                    if(err) {
                        console.log('Err: ', err);
                    } 
                    data = result;
                },
                {matchMode: Gracenote.BEST_MATCH_ONLY});
        console.log('Data: ', data);
    }
});
