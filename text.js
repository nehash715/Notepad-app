document.addEventListener("DOMContentLoaded",function(){
function changeFontStyle(e){
    let text=document.querySelector('#notes');
    if(e.target.id=== "boldtext"){
        e.target.classList.toggle('active');
        text.classList.toggle('boldtext');
    }
    if(e.target.id=== "under"){
        e.target.classList.toggle('active');
        text.classList.toggle('under')
    }
}
const btnAction=document.querySelector(".bold");
btnAction.addEventListener("click",changeFontStyle);
})
