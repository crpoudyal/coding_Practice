<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Data Store In DataBase</title>
</head>
<body>
    

    <form action="" method="POST">
     <p>Name: <input type="text" name="name" id=""></p>
     <p>E-Mail: <input type="email" name="email" id=""></p>
     <p>Address: <input type="text" name="address" id=""></p>
     <p>Age : <input type="number" name="age" id=""></p>
     <p>Phone No: <input type="number" name="phno" id=""></p>
   <p>
     Country:
    <select name="country" id="">
        <option value="Nepal">Nepal</option>
        <option value="India">India</option>
        <option value="Pakistan">Pakistan</option>
        <option value="Bangladesh">Bangladesh</option>
        <option value="China">China</option>
        <option value="Afghnaistan">Afghnaistan</option>
        <option value="sri lanka">sri lanka</option>
    </select>
   </p>
    <input type="submit" name="save" value="save">
    </form>


    <?php

//connection Established
    $servername='localhost';
	$username='root';
	$password='';
	$dbname = "form-data";
	$conn=mysqli_connect($servername,$username,$password,$dbname);
	  if(!$conn){
		  die('Could not Connect MySql Server:');
		}

    if(isset($_POST['save'])){
        //extract($_POST);
        $name = $_POST['name'];
        $email =$_POST['email'];
        $address =$_POST['address'];
        $age=$_POST['age'];
        $phone=$_POST['phno'];
        $country =$_POST['country'];
    }
    $stmt = $conn->query("Insert into form(Name,email,address,age,phno,country) values('$name','$email','$address','$age','$phone','$country')");

    if($stmt === true){
        echo"data inserted";
    }else{
        echo"Data not insert";
    }
?>

</body>
</html>