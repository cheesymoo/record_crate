App.Models.buttons = Backbone.Model.extend({
    defaults: {
        buttons: ['zero','one','two','three'], // array of button text
        correct: 0 // which button is correct?
    },

    initialize: function() {
    },

    makeButtons: function(hash_num) { // take hash number of correct album, choose the rest
        // shuffle an array 0-3, first # is correct, rest are bogus
        var pos = this._shuffle([0,1,2,3]);
        var temp = ['','','',''];
        temp[pos[0]] = ALBUM_HASH[hash_num].album;
        var others = this._buildArray(ALBUM_HASH.length, hash_num);
        others = this._shuffle(others);
        temp[pos[1]] = ALBUM_HASH[others[0]].album;
        temp[pos[2]] = ALBUM_HASH[others[1]].album;
        temp[pos[3]] = ALBUM_HASH[others[2]].album;
        this.set('buttons', temp);
        return pos[0]; // where the winning ticket is
    },

    _ranInt: function(max) {
        return Math.floor(Math.random() * max);
    },

    _shuffle: function(row) { // Fisher-Yates shuffle
        var counter = row.length, temp, i;
        
        while (counter > 0) {
            i = Math.floor(Math.random() * counter);
            counter--;
            temp = row[counter];
            row[counter] = row[i];
            row[i] = temp;
        }

        return row;
    },

    _buildArray: function(length, missing) { // build array with one value missing
        var array = [];
        for ( var i = 0; i < length; i++)
        {
            if (i == missing) {
                continue
            }
            array[i] = i;
        }
        array.splice(missing,1);
        return array;
    },

    _uniqueRan: function(used, max) { // generate unique random # between 0 and max 
        var length = used.length, i, num;
        var unique = false;
        while (!unique) {
            num = this._ranInt(max);
            unique = true;
            for (i = 0; i < length; i++) {
                if (num  == used[i]) {
                    unique = false;
                }
            }
        }
        return num;
    }
});
