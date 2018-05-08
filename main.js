
// Used for testing CMD mode
define(function (require) {

    var infinitusOperation = require('./infinitusInterfaces');
    infinitusOperation.setConfig({ debug: true });
    
    OpenCamera = function () {

        infinitusOperation.openCamera({
            success: function (data) {

                alert(data);
            },
            error: function (error) {

                alert(error);
            }
        });
    };

    OpenPhotoAlbum = function () {
        infinitusOperation.openPhotoAlbum({
            success: function (data) {

                alert(data);
            },
            error: function (error) {

                alert(error);
            }
        });
    };

    RequestLocation = function () {
        infinitusOperation.requestLocation({
            success: function (data) {

                alert(data.latitude);
                alert(data.longitude);
                alert(data.address);
            },
            error: function (error) {

                alert(error);
            }
        });
    };

    StartRecord = function () {
        infinitusOperation.startRecord({
            success: function (data) {
                document.getElementById('Result').innerText = 'Start recored success.';

            },
            error: function (error) {
                document.getElementById('Result').innerText = 'Start recored failed.';

            }
        });
    };

});