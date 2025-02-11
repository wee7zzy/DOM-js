const btn1=document.getElementById("btn1");
const para=document.getElementById("p1");

const btn2=document.getElementById("btn2");
const HE1=document.getElementById("h1");

const btn3=document.getElementById('btn3');
let input1=document.getElementById("inputmaj");
// let uppertext=input.toUppercase();

btn1.addEventListener("click",()=>{
    para.innerHTML="hello , i'm yassine";
})

let i=0;
btn2.addEventListener('click',()=>{
    i++;
    HE1.textContent=i;
}) 


btn3.addEventListener('click',()=>{
   let uppertext= input1.value.toUpperCase();
    
    document.getElementById('resu').innerText='resultat : '+ uppertext;
})







