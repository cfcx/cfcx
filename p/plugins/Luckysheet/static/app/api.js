var api={
    getFileInfo:function(){
        return JSON.parse(decodeURIComponent(window.location.search.substring(1)));
    },
    getFile:function(fileInfo,callBackFn){
        var xhr = new XMLHttpRequest();
        xhr.open("POST",fileInfo["apphost"]+"editor/fileGet",true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send("filename="+fileInfo["path"]);
        xhr.onreadystatechange=function(){
            if (xhr.readyState==4){
                if (xhr.status==200){
                    try{
                        var content=JSON.parse(xhr.responseText);
                        if(content["code"]){
                            callBackFn(content,false);
                            return 0;
                        }else{
                            callBackFn(content,true);
                            return 0;
                        };
                    }catch(e){
                        callBackFn(e,true);
                        return 0;
                    };
                }else{
                    callBackFn(null,true);
                    return 0;
                };
            };
        };
    },
    setFile:function(fileInfo,filestr,callBackFn){
        var xhr = new XMLHttpRequest();
        xhr.open("POST",fileInfo["apphost"]+"editor/fileSave",true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send("path="+fileInfo["path"]+"&base64=true&filestr="+encodeURIComponent(filestr));
        xhr.onreadystatechange=function(){
            if (xhr.readyState==4){
                if (xhr.status==200){
                    try{
                        var content=JSON.parse(xhr.responseText);
                        if(content["code"]){
                            callBackFn(content,false);
                            return 0;
                        }else{
                            callBackFn(content,true);
                            return 0;
                        };
                    }catch(e){
                        callBackFn(e,true);
                        return 0;
                    };
                }else{
                    callBackFn(null,true);
                    return 0;
                };
            };
        };
    }
}