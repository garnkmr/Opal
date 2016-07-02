var _instance;

var utils = function () {

    var randomNameGenerator = function () {
        var epochTime = (new Date).getTime();
        return 'rand_' + epochTime;
    };

    var randomNoteGenerator = function (length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };

    return {
        randomNameGenerator: randomNameGenerator,
        randomNoteGenerator: randomNoteGenerator
    };
};

module.exports = {
    getInstance: function () {
        if (!_instance) {
            _instance = new utils();
        }
        return _instance;
    }
};
