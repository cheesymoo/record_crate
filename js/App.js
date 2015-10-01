var App = {
    Views: {},
    Models: {},
    Collections: {},
    Router: {}
}

var Gracenote = require("node-gracenote");

var CLIENT_ID = '1373283025';
var CLIENT_TAG = '7742CF6EBA691DAFBD3AF7097AB18281';
var USER_ID = '27960626822430032-D2F52A03A25E7EF3F24F8B1EBE7227B8'; 

var api = new Gracenote(CLIENT_ID, CLIENT_TAG, USER_ID);
api.setExtended('COVER');

$(document).ready(function(){
    App.Router.Instance = new App.Router();
    Backbone.history.start();
});
