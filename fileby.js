let btn =document.querySelector("#btn")
let filein =document.querySelector("#filein")
btn.addEventListener("click",function(){
    filein.click();
})
filein.addEventListener("click",function(detl){
    const file=detl.target.file[0];
    if(file){
        btn.textContent=file.name;
    }
});