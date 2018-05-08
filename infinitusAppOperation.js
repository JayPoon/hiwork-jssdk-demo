
(function () {
    callbackTable = new Array();
    whiteList = new Array();

    infinitusAppOperation = {

        setCallbackTable: function (callback) {
            callbackTable.push(callback);
            console.log(callbackTable);
        },

        setWhiteList: function (data) {
            whiteList = data.split(',');
        },
        getWhiteList: function () {
            return whiteList;
        },
        openCameraByApp: function (id) {
            console.log(id);
        },

        getCameraPhotoByApp: function (jsonContent) {
            var data = JSON.parse(jsonContent);
            var id = data.id;
            var code = data.code

            var callback = null;
            for (var i = 0; i < callbackTable.length; i++) {

                if (callbackTable[i].id === id) {
                    callback = callbackTable[i].content;
                    callbackTable.splice(i);
                    break;
                }
            }

            if (callback !== undefined && callback !== null) {
                if (code === 0) {
                    callback.success(data.photoContent);
                } else {
                    callback.error(data);
                }
            } else {
                throw "exception";
            }
        },

        openPhotoAlbumByApp: function (id) {
        },

        getSelectedPhotoesInAlbumByApp: function (jsonContent) {
            var data = JSON.parse(jsonContent);
            var id = data.id;
            var code = data.code

            var callback = null;
            for (var i = 0; i < callbackTable.length; i++) {

                if (callbackTable[i].id === id) {
                    callback = callbackTable[i].content;
                    callbackTable.splice(i);
                    break;
                }
            }

            if (callback !== undefined && callback !== null) {
                if (code === 0) {
                    callback.success(data.photoContent);
                } else {
                    callback.error(data);
                }
            } else {
                throw "exception";
            }
        },

        requestLocationByApp: function (id) {

        },

        responseLocationByApp: function (jsonContent) {
            var data = JSON.parse(jsonContent);
            var id = data.id;
            var code = data.code

            var callback = null;
            for (var i = 0; i < callbackTable.length; i++) {

                if (callbackTable[i].id === id) {
                    callback = callbackTable[i].content;
                    callbackTable.splice(i);
                    break;
                }
            }

            if (callback !== undefined && callback !== null) {
                if (code === 0) {
                    callback.success(data.locationContent);
                } else {
                    callback.error(data);
                }
            } else {
                throw "exception";
            }
        },

        startRecordByApp: function (id) {

        },

        getRecordByApp: function (jsonContent) {
            var data = JSON.parse(jsonContent);
            var id = data.id;
            var code = data.code

            var callback = null;
            for (var i = 0; i < callbackTable.length; i++) {

                if (callbackTable[i].id === id) {
                    callback = callbackTable[i].content;
                    callbackTable.splice(i);
                    break;
                }
            }

            if (callback !== undefined && callback !== null) {
                if (code === 0) {
                    callback.success(data.recordContent);
                } else {
                    callback.error(data);
                }
            } else {
                throw "exception";
            }
        }
    };
})()
