/**
 * @author perezyuan.
 * @time 2016/12/19.
 * @desc 照片墙核心逻辑
 */
const uploader = require('./util/uploader');
(function ($) {
    $('#st-stack').stackslider();

    let $overlay = $('.overlay');
    $('.J-upload-open').on('click',() => {
        $overlay.show();
    })

    $('.J-upload-close').on('click',() => {
        $overlay.hide();
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
                        new uploader({
                            url: '/ajax/upload',
                            multiple: true,
                            type: ['jpg', 'png'],
                            onProgress(event) {
                                let pre = Math.floor(100 * event.loaded / event.total);
                                console.log(pre);
                            }
                        })
                    } else {
                        alert(res.msg);
                    }
                }
            })
        }
    })
})($)