const Task=document.getElementById("task");
const Listcontainer=document.getElementById("listcontainer");

function addTask()
{
    if(Task.value==='')
    {
        alert("Enter a Valid Value!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=Task.value;
        Listcontainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    Task.value="";
    save();
}
Listcontainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
}, false);


function save(){
    localStorage.setItem("data", Listcontainer.innerHTML);
}
function show()
{
    Listcontainer.innerHTML=localStorage.getItem("data");
}
show();