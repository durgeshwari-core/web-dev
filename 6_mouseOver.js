// let abcd = document.querySelector("#abcd");

// abcd.addEventListener("mouseover",function(){
//     abcd.style.backgroundColor="yellow";
// });

// abcd.addEventListener("mouseout",function(){
//     abcd.style.backgroundColor="red";
// });
let abcd= document.querySelector("#abcd");
window.addEventListener("mousemove",function(det){
    abcd.style.top=det.clientX+"px"
    abcd.style.left=det.clientX+"px"
});