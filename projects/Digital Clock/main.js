
 setInterval(displayclock,500);

 function displayclock(){
     var time = new Date();
     var hrs = time.getHours();
     var min = time.getMinutes();
     var sec = time.getSeconds();
     var dn = "AM";
 
     if(hrs>12){
         dn ="PM";
     }
     if (hrs > 12){
         hrs =hrs-12;
     }
     if (hrs == 0){
         hr = 12;
     }
     if(sec<10){
         sec ='0'+sec;
     }
     if(min<10){
        min ='0'+min;
    }
    if(hrs<10){
        hrs ='0'+hrs;
    }
    
     document.getElementById("clock").innerHTML = hrs + ":" + min + ":" + sec +" "+ dn;
 }
 