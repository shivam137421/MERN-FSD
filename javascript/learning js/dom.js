let check1 = document.getElementById("myid");
console.dir(check1);
console.log(check1);
let check2 = document.getElementById("myclass");
console.dir(check2);
console.log(check2);
let check3 = document.getElementById("p");
console.dir(check3);
console.log(check3);




//queryselector
let checkquery = document.querySelector(".myclass");
console.dir(checkquery);
console.log(checkquery);

let checkqueryall = document.querySelectorAll(".myclass");
console.dir(checkqueryall);
console.log(checkqueryall);
console.log(checkqueryall.tagName);
console.log(checkqueryall.innerText);
console.log(checkqueryall.innerHTML);
console.log(checkqueryall.textContent);



//properties
let checkproperties=document.querySelector("div");
console.dir(checkproperties);
console.log(checkproperties.tagName);
console.log(checkproperties.innerText);
console.log(checkproperties.innerHTML);
console.log(checkproperties.textContent);




// Create 3 divs with common class name - “box” , Access them & add some unique text to each of them
let divs=document.querySelectorAll(".div");
console.dir(divs);
let idx=1;
for(let div of divs){
    div.innerText=`unique value ${idx}`;
    idx++;
}




//attributes
let attr_var=document.querySelector("div");
let value=attr_var.getAttribute("id");
console.log(value);
attr_var.setAttribute("id","newval");
attr_var.style.backgroundColor="green";
attr_var.style.fontSize="26px"

let listitemnode=document.querySelector("#listitem");
let el=document.createElement("h1");
el.innerText="hii i'm new here";
listitemnode.append(el);

listitemnode.remove();



//qs2
let paranode=document.querySelector(".old");
paranode.style.backgroundColor = "green";
