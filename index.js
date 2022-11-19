  
    setInterval(callme,)
   

    function callme(){
let date=new Date
let second=date.getSeconds()
let minute=date.getMinutes()
let houre=date.getHours()
const hourespan=document.getElementById("hourespan")
const minutespan=document.getElementById("minutespan")
const secondspan=document.getElementById("secondspan")
const helment=document.getElementById("clock")
second= second<9 ? "0"+second:second
// minute= minute<9 ? "0"+minute:minute
// houre= houre<9 ? "0"+houre:houre
let amorpm=houre<12 ?"am":"pm"
helment.innerHTML=`${houre}: ${minute}: <span id="seccss"> ${second}</span>  ${amorpm}`
    }

    const firsthand=document.querySelector(".firsthand")
    const secondhand=document.querySelector(".secondhand")
    const thirdhand=document.querySelector(".thirdhand")
       let first_hand_degree=6
       let second_hand_degree=6
       let third_hand_degree=6
   setInterval(spinhand,1000);

   function spinhand(){
    if(first_hand_degree<=360){
     firsthand.style.transform = `rotate(${first_hand_degree}deg)`;
    
      first_hand_degree=first_hand_degree+6
    }else if(first_hand_degree>360){
       first_hand_degree=100
  
     secondhand.style.transform = `rotate(${second_hand_degree}deg)`;
      second_hand_degree=second_hand_degree+6
    
    } 
     if(second_hand_degree>360){
       const thirdhand=document.querySelector(".thirdhand")
       second_hand_degree=6
     
     thirdhand.style.transform =`rotate(${third_hand_degree}deg)`;
     third_hand_degree+=6

    }

    if(third_hand_degree>360){
     third_hand_degree=6
     
    }


   }