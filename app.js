let btn=document.querySelector("button");
let inp=document.querySelector("input")
let ul=document.querySelector("ul")
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerHTML=inp.value;
    
    let delBtn=document.createElement("button")
    delBtn.innerText="Delete"
    delBtn.classList.add("delete")    
    
    
    item.appendChild(delBtn);
    ul.appendChild(item);
    console.log(inp.value)
    inp.value="";
})
ul.addEventListener("click",function(event){
   if(event.target.nodeName){
    let listitem=event.target.parentElement;
    listitem.remove();
   } 
});
