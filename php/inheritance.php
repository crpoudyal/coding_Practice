<?php
class Employee{
     public $name;
     public $address;

     function setName($newName){
         $this->name= $newName;
     }
     function setAddress($newAddress){
        $this->address= $newAddress;
     } 
}

class Permanent extends Employee{
    public $salary;
    public $post; 

    function __construct($name,$address,$salary,$post){
        $this->name= $name;
        $this->address= $address;
        $this->salary= $salary;
        $this->post= $post;
    }
    
    function setSalary($newSalary){
        $this->salary= $newSalary;
    }
    function setPost($newPost){
       $this->post= $newPost;
    }
    function displayAll(){
        echo "Name = {$this->name} Address = {$this->address} Salary = {$this->salary} Post = {$this->post}";
    }
}
$per = new Permanent("krishna","Biratnagar",20000,"Sostware Enginner");
$per->displayAll();
?>