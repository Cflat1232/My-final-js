let total=10;
let correct=0;

let q1but=document.getElementById("Butt")

let cor1=document.getElementById("bioware")

q1but.addEventListener("click",()=>{
    if(cor1.checked){
        alert("Correct Bioware is he creater of Mass Effect")
    }
})