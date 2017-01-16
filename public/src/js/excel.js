/**
 * @author perezyuan.
 * @time 2016/12/31.
 * @desc 上传到excel
 */

(function(){
    const $btn = $('.excel-submit'),
        $infoForm = $('#excelForm'),
        $loading = $('.excel-wrap');
    $btn.on('click',() => {
        $loading.show();
        var _data = $infoForm.serialize();
        $.ajax({
            url: '/ajax/inputInfo',
            type: 'post',
            data: _data,
            success : (res) => {
                if(res.state == 1) {
                    alert('提交成功!');
                    window.location.reload();
                } else {
                    alert(res.msg);
                    $loading.hide();
                }
            }
        })
    })
})()