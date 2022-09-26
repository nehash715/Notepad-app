
document.addEventListener("DOMContentLoaded",function(){
   showNotes();
let addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click",function(){
   let notes=document.getElementById("notes");
   let addNote=localStorage.getItem("addNote");
   if(addNote== null){
      notesObj=[];
   }
   else{
      notesObj=JSON.parse(addNote);
   }
   notesObj.push(notes.value);
   localStorage.setItem("addNote",JSON.stringify(notesObj));
   notes.value="";
   console.log(notesObj);
   showNotes();
})
function showNotes(){
   let addNote=localStorage.getItem("addNote");
   if(addNote== null){
      notesObj=[];
   }
   else{
      notesObj=JSON.parse(addNote);
   }
   let myNotes="";
   notesObj.forEach(function(element,index ) {
      myNotes+=` <div class="card">
      <div class="container">
          <h4>${index + 1}</h4>
          <p>${element}</p>
      </div>
   </div>`;
   });
   let noteEle=document.getElementById("yourNote");
   if(notesObj.length!=0){
      noteEle.innerHTML=myNotes;
   }
   else{
      noteEle.innerHTML=`Add Your first Note by click on add note!`
   }
}

})





