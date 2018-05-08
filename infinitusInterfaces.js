
(function () {

    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function (exports) { return exports = infinitusOperation; });
    }

    config = {
        debug: false
    }

    infinitusOperation = {

        setConfig: function (data) {
            config.debug = data.debug
        },

        /**
         * 检测当前的主机域名与管理员设置的白名单是否有匹配
         */
        validUrl: function () {
            var currentHost = document.domain;//获取主机域名
            var whiteList = window.infinitusAppOperation.getWhiteList();//调用接口白名单
            if (whiteList !== undefined && whiteList !== null) {
                for (var i = 0; i < whiteList.length; i++) {

                    if (whiteList[i] === currentHost) {
                        return true;
                    }
                }
            }

            return false;
        },

        /**
         * 打开照相机函数
         * data 成功失败的回调函数
         */
        openCamera: function (data) {
            /*
            暂时不做白名单处理，需要处理再删除注释
            if (!this.validUrl()) {
                alert('invalid url');
                return;
            }
            */

            var id = this.guid(); 

            var data = { id: id, content: { success: data.success, error: data.error } };

            window.infinitusAppOperation.setCallbackTable(data);
            window.infinitusAppOperation.openCameraByApp(id);
        },

        /**
         * 生成资源标识符
         */
        guid: function () {
            /**
             * 生成四位数的随机数
             */
            function S4() {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            }
            
            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
        },

        /**
         * 打开本地相册
         * data 成功失败的回调函数
         */
        openPhotoAlbum: function (data) {
            if (!this.validUrl()) {
                alert('invalid url');
                return;
            }

            var id = this.guid();

            var data = { id: id, content: { success: data.success, error: data.error } };

            window.infinitusAppOperation.setCallbackTable(data);
            window.infinitusAppOperation.openPhotoAlbumByApp(id);
        },

        /**
         * 获取经纬度
         * data 成功失败的回调函数
         */
        requestLocation: function (data) {
            if (!this.validUrl()) {
                alert('invalid url');
                return;
            }

            var id = this.guid();

            var data = { id: id, content: { success: data.success, error: data.error } };

            window.infinitusAppOperation.setCallbackTable(data);
            window.infinitusAppOperation.requestLocationByApp(id);
        },

        startRecord: function (data) {
            if (!this.validUrl()) {
                alert('invalid url');
                return;
            }

            var id = this.guid();
            var data = { id: id, content: { success: data.success, error: data.error } };

            window.infinitusAppOperation.setCallbackTable(data);
            window.infinitusAppOperation.startRecordByApp(id);
        },

        // TODO:    
        stopRecord: function () {
            if (!this.validUrl()) {
                alert('invalid url');
                return;
            }

            window.infinitusAppOperation.stopRecordByApp();
        },
        // TODO:
        playRecord: function () {
            if (!this.validUrl()) {
                alert('invalid url');
                return;
            }
            window.infinitusAppOperation.playRecordByApp();
        },

        printData: function (data) {
            if (config.debug) {
                alert(data);
                console.log(data);
            } else {
                console.log(data);
            }
        }

    };
})()
