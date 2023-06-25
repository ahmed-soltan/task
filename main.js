// let myForm=document.querySelector("form");
// let distance=document.querySelector("input");
// let output=document.querySelector(".outputs")
// let kmc=document.querySelector(".KMC")

// myForm.addEventListener("submit",function(e){
//     e.preventDefault()
//     let newDistance=parseFloat(distance.value);

//              if(newDistance){
//                  kmc.innerHTML=`${newDistance} Miles Converted to ${(newDistance*1.609344).toFixed(3)} km`
//                  kmc.style.color="aliceblue"
//                 }else{
//                     kmc.innerHTML="ERROR : Please Enter a Number";
//                     kmc.style.color="red"
//              }
        
    
    

//     console.log(kmc.innerHTML) 
// })

let myForm=document.querySelector("form")
let name=document.getElementById("name")
let email=document.getElementById("email")
let phone=document.getElementById("phone")
let pass=document.getElementById("password")
let img=document.getElementById("image")
let head=document.querySelector(".heading")



let cardName=document.getElementById("card-name")
let cardEmail=document.getElementById("card-email")
let cardPhone=document.getElementById("card-phone")
let cardPass=document.getElementById("card-Password")
let cardImg=document.getElementById("card-img");


myForm.addEventListener("submit",function(e){

    e.preventDefault()
    head.innerHTML="Your Data";
    cardImg.src=img.value;
    cardName.innerHTML=`Name : ${name.value}`;
    cardEmail.innerHTML=`Email : ${email.value}`;
    cardPhone.innerHTML=`Phone : ${phone.value}`;
})