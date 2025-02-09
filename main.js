const btn1=document.getElementById("btn1");
const para=document.getElementById("p1");

const btn2=document.getElementById("btn2");
const HE1=document.getElementById("h1");

btn1.addEventListener("click",()=>{
    para.innerHTML="hello , i'm yassine";
})

let i=0;
btn2.addEventListener('click',()=>{
    i++;
    HE1.textContent=i;
})







