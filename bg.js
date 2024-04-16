console.log("cars animation")

let imgbox=document.querySelector(".img-box")
let imgwrap=document.querySelector(".img-wrap");

let leftSpace= imgbox.offsetLeft;

real.style.width=imgbox.offsetWidth+"px"

imgbox.addEventListener("mousemove", (e)=>{
    let boxWidth=(e.pageX- leftSpace) +"px";
    imgwrap.style.width=boxWidth;
    line.style.left=boxWidth;
    console.log("mouse hover")
})