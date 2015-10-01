var App = {
    Views: {},
    Models: {},
    Collections: {},
    Router: {}
}

var CLIENT_ID = '1373283025-7742CF6EBA691DAFBD3AF7097AB18281';
var USER_ID = '27960626822430032-D2F52A03A25E7EF3F24F8B1EBE7227B8'; 

$(document).ready(function(){
    App.Router.Instance = new App.Router();
    Backbone.history.start();
});
