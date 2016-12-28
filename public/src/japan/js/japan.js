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
        init(option) {
            let me = this,
                config = option || {};
            me.config = $.extend(this.config, config);
            me.createElem();
        },
        createElem() {
            let me = this,
                $up = this.$el = $('<input>');
            $up.prop({
                id: 'uploader',
                type: 'file',
                name: 'file',
                multiple: this.config.multiple ? true : false
            });
            $up.trigger('click');
            $up.on('change', $.proxy(me.changeFile, me))
        },
        changeFile() {
            let fd = new FormData,
                me = this,
                files =  me.$el[0].files;
            for (let i = 0, ii = files.length;i < ii; i++) {
                // 判断文件大小
                if(files[i].size > me.config.maxSize * 1024 * 1024) {
                    alert('请上传小于' + me.config.maxSize + 'M的文件');
                    return false;
                }
                let type = files[i].name.split('.').pop();
                if(me.config.type.indexOf(type.toLocaleLowerCase()) == -1) {
                    alert("暂不支持该类型的文件，请重新选择!");
                    return false;
                }
                if(Object.prototype.toString.call(me.config.beforeSend) === '[object Function]') {
                    if(me.config.beforeSend(me.$el) === false){
                        return false;
                    }
                }
                fd.append('file' + i, files[i]);
                $.ajax({
                    type: "post",
                    url: "/ajax/upload",
                    data: fd,
                    // 取消数据预处理
                    processData : false,
                    // 自动加上正确的Content-Type
                    contentType : false ,
                    xhr: function(){
                        let xhr = $.ajaxSettings.xhr();
                        if(Object.prototype.toString.call(me.config.onProgress) === '[object Function]'
                            && xhr.upload) {
                            xhr.upload.addEventListener("progress", me.config.onProgress, false);
                            return xhr;
                        }
                    }
                });
            }
        }
    }

    $('.upload-open').on('click',() => {

    })

    $('#checkLove').on('click',() => {
        let answer = $('input[name=answer]').val().trim();
        if (answer === '') {
            alert('请输入一生所爱~');
        } else {
            $.ajax({
                url: '/ajax/checklove',
                type: 'post',
                data: `answer=${answer}`,
                dataType: 'json',
                async: false,
                success(res) {
                    if (res.code == 1) {

                        // new uploader({
                        //     url: '/ajax/upload',
                        //     multiple: true,
                        //     type: ['jpg', 'png'],
                        //     onProgress(event) {
                        //         let pre = Math.floor(100 * event.loaded / event.total);
                        //         console.log(pre);
                        //     }
                        // })
                    } else {
                        alert(res.msg);
                    }
                }
            })
        }
    })
})($)