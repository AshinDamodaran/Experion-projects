let form = document.querySelector("form");


form.addEventListener("submit",function (event){
event.preventDefault()
console.log("submitted")
let fname = document.querySelector("#fname")
console.log(fname.value.length)
if(fname.value.length < 2){
    let fmessage = document.querySelector("#fname_text")
    fmessage.style.display = "block";
    fmessage.innerText = "first name is short"
}
else{

    let fmessage = document.querySelector("#fname_text")
    fmessage.style.display = "none";
}
})

