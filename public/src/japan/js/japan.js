/**
 * @author perezyuan.
 * @time 2016/12/13.
 * @desc 照片墙
 */
//todo 修改模式
$(function() {
    $('#st-stack').stackslider();

    var btn = document.getElementById('up'),
        bf = document.getElementById("before"),
        prs = document.getElementById("process");

    btn.onclick = function(){
        myUpload({
            url: '/ajax/upload',
            maxSize: 10,
            multiple: true,
            beforeSend: function(file){
                bf.innerText = "开始上传...";
            },
            callback: function(res){
                res = JSON.parse(res);
                if(res && res.code == 1){
                    bf.innerText = "上传成功!"
                }else{
                    console.log(res.msg);
                }
            },
            uploading: function(pre){
                prs.innerText = "当前上传进度为：" + pre + "%";
            }
        });
    }

    function myUpload(option){
        var fd = new FormData(),
            xhr = new XMLHttpRequest(),
            input;
        input = document.createElement('input');
        input.setAttribute('id', 'myUploadInput');
        input.setAttribute('type', 'file');
        input.setAttribute('name', 'file');
        if(option.multiple){
            input.setAttribute('multiple', true);
        }
        document.body.appendChild(input);
        input.style.display = 'none';
        input.click();
        var fileType = ['jpg','png'];
        input.onchange = function(){
            if(!input.value){return;}
            console.log(input.value);
            var type = input.value.split('.').pop();
            if(fileType.indexOf(type.toLocaleLowerCase()) == -1){
                alert("暂不支持该类型的文件，请重新选择!");
                return;
            }
            for(var i=0, file; file=input.files[i++];){
                if(option.maxSize &&  file.size > option.maxSize * 1024 * 1024){
                    alert('请上传小于'+option.maxSize+'M的文件');
                    return;
                }
            }
            if(option.beforeSend instanceof Function){
                if(option.beforeSend(input) === false){
                    return false;
                }
            }
            for(var i=0, file; file=input.files[i++];){
                console.log(fd)
                fd.append('file'+i, file);
            }
            xhr.open('post', option.url);
            xhr.onreadystatechange = function(){
                if(xhr.status == 200){
                    if(xhr.readyState == 4){
                        if(option.callback instanceof Function){
                            option.callback(xhr.responseText);
                        }
                    }
                }else{
                    console.log("上传失败！");
                }
            }
            xhr.upload.onprogress = function(event){
                var pre = Math.floor(100 * event.loaded / event.total);
                if(option.uploading instanceof Function){
                    option.uploading(pre);
                }
            }
            xhr.send(fd);
        }
    }
});