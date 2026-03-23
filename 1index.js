//text select
let h1= document.querySelector("h1");
undefined
h1.innerHTML="shreya is very good";
'shreya is very good'
h1.innerText="tu toh masst hai ";
'tu toh masst hai '
h1.textContent="all clear";
'all clear'
h1.innerHTML="<i>hey</>"
console.dir(h1)
//attribute manipalator
    let img=document.querySelector("img");
    img.setAttribute("src","https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80");

    let a=document.querySelector("a");
    console.log(a.getAttribute("href"));

    let h2=document.querySelector("h2");
    h2.removeAttribute("id");

// create element,append & prepend
    let pq=document.createElement("h4");
    pq.textContent="hello dear";
    document.querySelector("body").append(pq);

//.style
    let h3=document.querySelector("h3");
    h3.style.color="Red" ;
    console.dir(h3);
