var flag=true;
var count=0;
function myFunction() {
  var data = window.location.href.split('=');
  var id = window.location.href.split('=')[1];
  var name= id.split('&')[0];
  var otp=data[2].split('&')[0];
  var phoneNo=data[3].split('&')[0];
  
  localStorage.setItem("otp", otp);
  document.getElementById("demo").innerHTML = "Dear " + name +"<br>"+"Thank you for your inquiry. A 4 digit verification number has been sent to your phone number: "+phoneNo+"#enter this genrated otp:"+otp+", please enter in the following box and submit for confirmation:";
  //console.log("p",name,otp,phoneNo)
}

function isNumber(evt)
{
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
          {
             //alert("only digit are allowed")
             error.textContent = "only digit are allowed";
             error.style.color = "red";
           return false;
             
          }
          error.textContent = "";
          //error.style.color = "green";
        
         return true;
}
function checkotp()
{
      var otpData=document.getElementById("otp").value;
      if(otpData==localStorage.getItem("otp"))
      {
          error.textContent = "correct";
    	error.style.color = "green";
        return true;
      }
     else
      {
         error.textContent = "invalid otp";
         error.style.color = "red";
       return false;
      }
      
}
//var otpData=document.getElementById("otp").value;
function validate(){

  var otpData=document.getElementById("otp").value;
  
  if(otpData==localStorage.getItem("otp")){
    //error.textContent = "correct";
    //error.style.color = "green";
    //**document.getElementById("otpform").style.display="none"

    //***document.getElementById("success").style.display="block"  
    // document.getElementById("demo").style.display="none"
    //***document.getElementById("success").textContent="Validation Successful!"
    window.location.href = "http://pixel6.co/"
  }
  else if(otpData.length!=0){
    count=count+1;
    localStorage.setItem("count", count);
    if(localStorage.getItem("count")>=3){
    document.getElementById("error1").style.display="block"
    document.getElementById("error1").textContent="404 (Page Not Found)"
    window.location.href = "http://pixel6.co/123"
    }
   else
   {
      flag=false;
   }
    
    
    document.getElementById("otp").value="" 
    error.textContent= "invalid otp\n Enter it again";
    error.style.color = "red";

  }

}
