App.Models.Album = Backbone.Model.extend({
    defaults: {
        album: "The Wall",
        artist: "Pink Floyd",
        cover: ''
    },

    //urlRoot: 'https://c1373283025.web.cddbp.net/webapi/json/1.0/',
    urlRoot: 'localhost:8000/curl_proxy.php?ws_path=https://c1373283025.web.cddbp.net/webapi/json/1.0/',
    //urlRoot:'http://cors.io/?u=https://c1373283025.web.cddbp.net/webapi/json/1.0/', 

    sync: function(method, model, options) {
        //  
        $.ajax({
            type: 'POST',
            url: this.urlRoot,
            data: this.generatePayload()
        });
    },

    generatePayload: function()
    {
        return '<QUERIES><LANG>eng</LANG><AUTH><CLIENT>' +
            CLIENT_ID + '</CLIENT><USER>' + USER_ID + 
            '</USER></AUTH><QUERY CMD="ALBUM_SEARCH"><MODE>SINGLE_BEST_COVER</MODE>' +
            '<TEXT TYPE="ARTIST">' + this.get('artist') + '</TEXT>' +
            '<TEXT TYPE="ALBUM_TITLE">' + this.get('album') + 
            '</TEXT><OPTION><PARAMETER>SELECT_EXTENDED</PARAMETER>' + 
            '<VALUE>COVER</VALUE></OPTION></QUERY>';
    }
});
