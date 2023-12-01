const button= document.querySelector(".submit");
const input=document.querySelector("input");
const ul=document.querySelector(".list-container");
let body=document.querySelector("body");
function addTask(){
    if(input.value==""){
        alert("plase enter a task")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        ul.appendChild(li);
        input.value="";
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
    }
    saveData();

}
button.addEventListener("click",()=>{
    addTask();
})
body.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        console.log(event.key)
        addTask();
    }

})
ul.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){

        e.target.classList.toggle("checked");
        console.log(e.target.tagName);
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        console.log(e.target);

    }
})
function saveData(){
    sessionStorage.setItem("data",ul.innerHTML);
}

function showData(){
    ul.innerHTML=sessionStorage.getItem("data");
}
showData()
const clear=document.querySelector(".clear")
clear.addEventListener("click",()=>{
    sessionStorage.removeItem("data");
    ul.innerHTML="";
})
