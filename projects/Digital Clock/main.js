
 setInterval(displayclock,500);

 function displayclock(){
     var time = new Date();
     var hrs = time.getHours();
     var min = time.getMinutes();
     var sec = time.getSeconds();
 
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
        sec ='0'+min;
    }
    if(hrs<10){
        sec ='0'+hrs;
    }
    
     document.getElementById("clock").innerHTML = hrs + ":" + min + ":" + sec;
 }
 