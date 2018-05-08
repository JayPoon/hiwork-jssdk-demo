
infinitusOperation.setConfig({ debug: true });

var xxOpenCamera = function () { //打开照相机
    infinitusOperation.openCamera({
        success: function (data) {
            document.getElementById('Result').innerText = 'Open Camera success.';
            document.getElementById("img").src = 'data:image/gif;base64,' + data;
        },
        error: function (data) {
            document.getElementById('Result').innerText = 'Open Camera failed.';
        }
    })
}

var xxOpenPhotoAlbum = function () { //打开相册
    infinitusOperation.openPhotoAlbum({
        success: function (data) {
            document.getElementById('Result').innerText = 'Open Photo success.';
            document.getElementById("img").src = 'data:image/gif;base64,' + data;
        },
        error: function (data) {
            document.getElementById('Result').innerText = 'Open Photo failed.';
        }
    })
}

var xxRequestLocation = function () { //获取经纬度
    infinitusOperation.requestLocation({
        success: function (data) {
            document.getElementById('Result').innerText = data.latitude + ',' + data.longitude + ',' + data.address;
        },
        error: function (data) {
            document.getElementById('Result').innerText = 'request Location failed.';
        }
    })
}

var xxStartRecord = function () { //开始录音
    infinitusOperation.startRecord({
        success: function (data) {
            document.getElementById('Result').innerText = '录音字符串为:'+data.recordContent;
        },
        error: function (data) {
            document.getElementById('Result').innerText = 'start Record failed.';
        }
    })
}