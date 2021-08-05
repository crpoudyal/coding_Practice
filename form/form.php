<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Data Collection</title>
</head>
<body>

<?php

$conn = new mysqli("localhost","root","","ex_db");
if($conn->connect_error){
    die("connection failed ".$conn->connect_error);
}else{
    echo "Database is successfully connected";
}

    if(isset($_POST['submit'])){
        $fname=$email=$uname=$password = " ";
            $fname = $_POST['fullname'];
            $email = $_POST['email'];
            $uname = $_POST['username'];
            $password = $_POST['password'];  
            if(strlen($fname)>10){
                echo "successsssś";
            }   
            
            $sql = "INSERT INTO data(fname,email,username,password) VALUES('$fname','$email','$uname','$password')";
            if($conn->query($sql)){
                echo "Inserted";
            }else{
                echo "failed";
            }
    }
?>
            
       <h4>Register</h4>
       <h5>Required fields *</h5>
        <form method="POST" action="form.php">
        <label>Your Full Name *:</label><br/>
        <input type="text" name="fullname" required /><br/><br/>
        <label>Email Address *:</label><br/>
        <input type="email" name="email" required /><br/><br/>
        <label>User Name *:</label><br/>
        <input type="text" name="username" required /><br/><br/>
        <label>Password *:</label><br/>
        <input type="password" name="password" required /><br/><br/>
        <input type="submit" name="submit" value="submit"/>
        </form>
</body>
</html>