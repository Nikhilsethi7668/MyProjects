const input=document.querySelector("#input");
const button=document.querySelector(".upper img")

let key="cc2c0edc889650e6c333a0a5ecbb7788"
let api="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
async function details(values){
    const response=await fetch(api+values+`&appid=${key}`);
    const data= await response.json();
    console.log(data);
    document.querySelector(".no1").innerHTML=data.wind.speed;
    console.log(data.wind.speed)
    

}
button.addEventListener("click",()=>{
    details(input.value);



})



