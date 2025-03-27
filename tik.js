let buttons=document.querySelectorAll(".btn")
let arr=Array.from(buttons)
let reset=document.querySelector(".resetbtn")
var previous=true
function signbox(){
if(previous ){
    return `x`
}
else{return `o`}
}
const wining=[
    [0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15],
    [0,4,8,12],[1,5,10,13],[2,6,10,14],[3,7,11,15],
    [0,5,10,15],[3,6,9,12]
]
arr.forEach((btn,index)=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML==""){
            e.target.innerHTML=`${signbox()}`
            previous=!previous
            winingcheck()
        }
    })
})
function winingcheck(){
    for(let [a,b,c,d] of wining){
        if(arr[a].innerHTML !=''&&
            arr[a].innerHTML===arr[b].innerHTML && 
            arr[b].innerHTML===arr[c].innerHTML &&
            arr[c].innerHTML===arr[d].innerHTML){
             arr.forEach(btn => btn.disabled = true);
             document.querySelector("h1").innerHTML=`${arr[a].innerHTML} wining !`
            
             return;
            }
        }
    }
    reset.addEventListener('click',(e)=>{
        arr.forEach(btn=>btn.innerHTML="")
        arr.forEach(btn => btn.disabled = false);
        document.querySelector("h1").innerHTML=""
        previous = true;
        console.log(buttons)
})