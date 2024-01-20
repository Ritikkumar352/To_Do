let inp=document.querySelector("input");
let abtn=document.querySelector(".addbtn");

let ul=document.querySelector("ul");

abtn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    let dbtn=document.createElement("button");
    dbtn.innerText="Delete";
    dbtn.classList.add("delete");
    item.appendChild(dbtn);

  
    inp.value=""; // for clearing input text field after button click
});


ul.addEventListener("click",function(event){
    console.log(event.target);
    console.log("ul is clicked");
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("List item deleted");
    }
})





