const getbtn = document.getElementById("getdata");

getbtn.addEventListener('click',getData);

function getData(){
    //creating a XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    // Sending the request with Get method
    xhr.open("GET", "data.txt",true);
    xhr.onload = function(){
        // If the status is 200, it means that the request was successful
        if(xhr.status == 200){
            // Getting the response data
            const data = xhr.responseText;
            // Displaying the response data
            document.getElementById("para").innerHTML = data;
        }
    }
    xhr.send();
}
