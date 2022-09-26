document.addEventListener("DOMContentLoaded",function(){
    let copy=document.getElementById("notes");
    let btnAction=document.getElementById("copy-btn");
    btnAction.onclick=function(){
        copy.select();
        document.execCommand("copy");
        
    }
})
