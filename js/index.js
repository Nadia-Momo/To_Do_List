//dom part start
let todoheadInput=document.querySelector('.todoheadInput');
let allSingleToDo=document.querySelector('.allsingleTodo');
let handleAddTodo=()=>{
    console.log("ha eta kaj kore");
    //create tags
    let singleToDoDiv=document.createElement('div');
    let input=document.createElement('input');
    let editButton=document.createElement('button');
    let deleteButton=document.createElement('button');
    let doneButton=document.createElement('button');
    //making append child
    allSingleToDo.appendChild(singleToDoDiv);
     singleToDoDiv.classList.add('singleToDoDiv');
    singleToDoDiv.classList.add('singleToDoDiv');
    singleToDoDiv.appendChild(input);
    singleToDoDiv.appendChild(editButton);
     singleToDoDiv.appendChild(deleteButton);
singleToDoDiv.appendChild(doneButton);
editButton.classList.add('editButton');
deleteButton.classList.add('deleteButton');
doneButton.classList.add('doneButton');
editButton.innerHTML='<i class="fa-regular fa-pen-to-square"></i>';
deleteButton.innerHTML='<i class="fa-solid fa-trash"></i>';
doneButton.innerHTML='<i class="fa-solid fa-check"></i>';
input.value= todoheadInput.value;
todoheadInput.value='';
input.setAttribute('readonly','readonly');
//------------setAttribute
//------------delete todo
deleteButton.addEventListener('click',()=>{
    singleToDoDiv.remove();
});
    //adding classname
  editButton.addEventListener('click',()=>{
    editButton.classList.toggle('edit');
    if(editButton.classList[1]=='edit'){
        input.removeAttribute('readonly','readonly');
    editButton.innerHTML='<i class="fa-solid fa-floppy-disk"></i>';
    editButton.style='background:pink;'
    }
   else{
    input.setAttribute('readonly','readonly');
 editButton.innerHTML='<i class="fa-regular fa-pen-to-square"></i>';
    editButton.style='background-image: linear-gradient( #f2f0ef, #0073cf);'
   }
  }) 
    
}
