function ageForm(){
    let x = document.forms["myForm"]["fage"].value;
  if (x == "" || x<-1) {
    alert("Enter the valid age");
    return false;
else{
    //document.getElementById('result').innerHTML= "Your Age is "+x;
    
}
  }
}