App.Collections.Albums = Backbone.Collection.extend({
    initialize: function(){
    },
    model: App.Models.Album,
    url: 'https://c1373283025.web.cddbp.net/webapi/json/1.0/'
});
