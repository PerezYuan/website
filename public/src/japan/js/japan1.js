/**
 * @author perezyuan.
 * @time 2016/12/19.
 * @desc
 */
(function ($) {
    $('#st-stack').stackslider();

    function uploader(option) {
        this.config = {
            // 上传的路由
            url : '',
            // 上传的种类
            type : ['jpg', 'png'],
            // 最大上传限制
            maxSize: 10,
            // 是否允许一次上传多个
            multiple: false,
            // 上传之前
            beforeSend() {
                console.log("开始上传...");
            },
            // 上传成功回调
            callback(res) {
                console.log(res);
            },
            onProgress(res) {
                console.log(res);
            }
        }
        this.init(option);
    }

    uploader.prototype = {
        $el : $('<input>'),
        init(option) {
            let me = this,
                config = option || {};
            me.config = $.extend(this.config, config);
            console.log(me.config);
            me.setElemAttr();
            me.bind();
        },
        setElemAttr() {
            let me = this;
            me.$el.prop({
                id: 'uploader',
                type: 'file',
                name: 'file',
                multiple: me.config.multiple ? true : false
            }).click();
        },
        changeFile() {
            let me = this,
                files =  me.$el[0].files;
            if (files.length == 0) { return false; }
            for (let i, ii = files.length;i < ii; i++) {
                // 判断文件大小
                if(files[i].size > me.config.maxSize * 1024 * 1024){
                    alert('请上传小于' + me.config.maxSize + 'M的文件');
                    return false;
                }
                let type = files[i].name.split('.').pop();
                if(me.config.type.indexOf(type.toLocaleLowerCase()) == -1){
                    alert("暂不支持该类型的文件，请重新选择!");
                    return false;
                }
            }
            console.log(me.$el);
        },
        bind() {
            let me = this;
            me.$el.on('change', me.changeFile.call(me));
        }
    }

    $('.upload-open').on('click',() => {
        new uploader({
            url: '/ajax/upload',
            multiple: true,
            type : ['jpg', 'png']
        })
    })
})($)