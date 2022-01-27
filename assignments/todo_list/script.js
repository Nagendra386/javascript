var input=document.querySelector('input')
var button=document.querySelector('button')
var todoDiv=document.querySelector('div.todos')
let count=0;
function add_todo(){
var para = document.createElement("p");
var textNode = document.createTextNode(input.value);
para.appendChild(textNode);
todoDiv.append(para);
para.setAttribute("key",count)
count+=1
}
button.addEventListener("click",add_todo);
todoDiv.addEventListener("click",remove);
function remove(e){
 todoDiv.removeChild(e.target);
}