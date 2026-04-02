let btn1 =document.querySelector("#btn1");
btn1.onclick=(evt)=>{      //evt=> event object which stores all information about event properties
    console.log("hello");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}

//js event handelling is priortize than inline event handelling in html
//and if for a single event multiple definition exist then last defined event definition is executed , to resolve this issue we use event listner forward 

let div =document.querySelector("#box");
div.onmouseover=(evt2)=>{
    console.log("hello this is div");
    console.log(evt2);
    console.log(evt2.type);
    console.log(evt2.target);
    console.log(evt2.clientX,evt2.clientY);
}


//event listeners
btn1.addEventListener("click",()=>{
    console.log("this is handler-1");
})
btn1.addEventListener("click",()=>{
    console.log("this is handler-2");
})
const handler3=()=>{
    console.log("this is handler-3");
}
btn1.addEventListener("click",handler3)
btn1.addEventListener("click",()=>{
    console.log("this is handler-4");
})

btn1.removeEventListener("click",handler3);


//qs1
//Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again
let mode=document.querySelector("#toggle");
let curr_mod="light";
let body=document.querySelector("body");
mode.addEventListener("click",()=>{
    if(curr_mod==="light"){
        curr_mod="black";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        curr_mod="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
})