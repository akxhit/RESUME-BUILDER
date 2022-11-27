function addnewWefield(){
    // console.log("adding new field");
// let newNode = document.createElement("textarea");
// newNode.classList.add("form-control");
// newNode.classList.add("wefield");

let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("wefield");
newNode.classList.add("mt-2");
newNode.setAttribute("rows", 3);
let weOb = document.getElementById("we");
let weAddbuttonOb = document.getElementById("weAddbutton");

weOb.insertBefore( newNode, weAddbuttonOb);


}

function addnewaqfield(){

    let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("aqfield");
newNode.classList.add("mt-2");
newNode.setAttribute("rows", 3);
let aqOb = document.getElementById("aq");
let weAddbuttonOb = document.getElementById("aqAddbutton");

aqOb.insertBefore(newNode,aqAddbutton )
  
}

// generating cv/

function generateCV(){

    // console.log("generatig vc")

    let namefield=document.getElementById("namefield").value;


    let nameT1=document.getElementById("nameT1")

    nameT1.innerHTML=namefield;

    // direct

    document.getElementById("nameT2").innerHTML=namefield

    //contacts

    document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;

    //add

    document.getElementById("addressT").innerHTML=document.getElementById("addressfield").value;

    document.getElementById("githubT").innerHTML=document.getElementById("Githubfield").value;
    
    document.getElementById("linkdinT").innerHTML=document.getElementById("linkdinfield").value;

    document.getElementById("instaT").innerHTML=document.getElementById("instafield").value;

    //obj


    document.getElementById("objT").innerHTML=document.getElementById("objfield").value;

    //we

    let wes=document.getElementsByClassName("wefield");

    let str="";

    for(let e of wes){
        str=str+`<li> ${e.value}</li>`;

    }

    document.getElementById("weT").innerHTML=str;

    //aq

//     let aqs=document.getElementsByClassName("aqfield");

//     let str1="";
//     for(let q of aqs){
//         str1=str1+`<li> ${q.value}<li>`;
//     }
// document.getElementById("aqT").innerHTML= str1;

let aqs=document.getElementsByClassName("aqfield");

    let str1="";

    for(let e of aqs){
        str1=str1+`<li> ${e.value}</li>`;

    }

    document.getElementById("aqT").innerHTML=str;
    
document.getElementById("cv-form").style.display="none"
document.getElementById("cv-template").style.display="block"

}

//printing cv

function printCV(){
    window.print();
}