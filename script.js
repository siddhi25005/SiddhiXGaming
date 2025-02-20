let pass=document.querySelector(".pass1");
let rbox=document.querySelector(".text");
let text=document.querySelector(".msg1")
let box=document.querySelector(".msg2")
pass.addEventListener("input",function(){
    if(pass.value==="123") {
        rbox.innerText="nice apka password sahi hai...Enjoy!!";
        rbox.innerText=window.location.href = "siddhi2.html"; 
    }
    else {
        rbox.innerText="aree...bhai easy password hai 😂";
        rbox.style.color="white";
        rbox.style.backgroundColor="red";

    }
});
text.addEventListener("input",function(){
    box.innerText=text.value+" ji sawagat hai aapka";
    box.style.backgroundColor="red";
    box.style.color="white";
})
