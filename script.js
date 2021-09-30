var formfields = document.getElementById("fields");
var error = document.getElementById("error1")
var error1 = document.getElementById("error2")
var error2 = document.getElementById("error3")
//var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var letters=/[a-zA-Z]+\s+[a-zA-Z]+/g;
var mailvalidation;
var nameValidation;
var phonevalidation;
var splitString1,splitString;

document.getElementById("phno").addEventListener("keyup", myFunction1);

var phone;
var d;

function myFunction1() {
//the user is not allowed to add spaces/brackets/hyphens, that should be handled by the script and it should happen in real time and not after all the 10 digits are typed in
   var demo2 = document.getElementById("demo2");
    phone = document.getElementById("phno").value;
   if(phone.length==19)
   {
  
     

       //make the number appear like (123) - 456 - 7890
       var cleaned = ('' + phone).replace(/\D/g, '');
       var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
       if (match) 
        {
           /*The next 3 digits represent the state in India. 
               only 36 valid number tey are put in arrray arr,in the from of key,value pair,key is 3 digit number and value is state if input number match with keys then

show the state name beside the mobile provider beside the box, eg Jio, Maharashtra.

everything else is an invalid number

*/
           const digit = [match[1],match[2],match[3]];
           var state=["Andhra Pradesh","ArunachalPradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","AndamanNicobar","Chandigarh","Dadra nagar","Delhi","Ladakh","Lakshadweep","Jammu "];

             //console.log("a legth****"+a.lengt
           //var arr={901: "Andhra Pradesh", 902: "Arunachal Pradesh", 903: "Assam", 904: "Bihar", 905: "Chhattisgarh", 906: "Goa", 907: "Gujarat", 908: "Haryana", 909: "Himachal Pradesh", 910: "Jharkhand", 911: "Karnataka", 912: "Kerala", 913: "Madhya Pradesh", 914: "Maharashtra", 915: "Manipur", 916: "Meghalaya", 917: "Mizoram", 918: "Nagaland", 919: "Odisha", 920: "Punjab", 921: "Rajasthan", 922: "Sikkim", 923: "Tamil Nadu", 924: "Tamil Nadu", 925: "Telangana", 926: "Tripura", 927: "Uttar Pradesh", 928: "Uttarakhand", 929: "West Bengal", 930: "Andaman and Nicobar Island", 931: "Chandigarh", 932: "Dadra and Nagar Haveli and Daman and Diu", 933: "Delhi", 934: "Ladakh", 935: "Lakshadweep", 936: "Jammu and Kashmir"};

               //console.log(arr)
              var code=parseInt(1000/28);
                  console.log("valueeeee"+code);
               var index=parseInt(digit[1]/28);
                   console.log("*********35"+parseInt(999/35));
                var i;
               
              
            //var x=digit[1];
             
               d=digit[0]+digit[1]+digit[2];

  

             
                 var flag=true;
                   //if(key==digit[1])
                      // {
                            //flag=true;
                            //console.log(key);
                       /*The first 3 digits represent the mobile provider and its logo should appear beside the box, based on following conditions

if the 3 digits fall between 621 - 799, then its Reliance Jio

if the 3 digits fall between 801 - 920, then its Idea

if the 3 digits fall between 921 - 999 then its Vodafone

everything else is an invalid number. ####valid phone is 8059161234:(803)-916-1234*/
                       if(digit[0]>621 && digit[0]<799)
                            {
                 //document.getElementById("demo").innerHTML = "You wrote: " +digit[0] 
                              //console.log(map1.get(match[2]));
                                    demo1.textContent=" Reliance Jio ," +state[index];
                                    error2.textContent = "correct";
                                    error2.style.color = "green";
                             return true;
                                 
                         
                             }
                       else if(digit[0]>801 && digit[0]<920)
                             {      
                                     demo1.textContent=" Idea, " +state[index];
                                     error2.textContent = "correct";
                                     error2.style.color = "green";
                             return true;
                             }
                       else if(digit[0]>921 && digit[0]<999)
                            {
                       
                                  demo1.textContent=" Vodafone, " +state[index-1];
                                  error2.textContent = "correct";
                                  error2.style.color = "green";
                           return true;
                      
                            }  
                      else
                           {
                              //alert("invalid number");
                                  error2.textContent = "invalid number";
                                   error2.style.color = "red";
                             return false;
                           }  
                         
                    /*}
                   else
                       {
                          error2.textContent = "";
                          flag=false;
                       }
                  
             if(flag==true)
               {
                  error2.textContent = "correct";
                  error2.style.color = "green";
                return true;
               }
           else
             {
               //alert("invalid statecode:please enter first three digit in rage between:621-799 OR 801-920 OR 921-999 # and next three digit in range between:901-936.");
                 error2.textContent = "";
                 error2.style.color = "red";
              return false;
             } */
 
                              
     }
    
   }

}


function emailValidation(){
  var email=  document.getElementById("email").value;
  if(email.match(mailformat)){
    error1.textContent = "correct";
    error1.style.color = "green";
    return true;
   }
   else{
    error1.textContent = "invalid mail id";
    error1.style.color = "red";
    return false;
   }
}
function fnameValidation(){
  var fname=  document.getElementById("fname").value;
  splitString1=fname.trim();
  splitString1=fname.replace(/\s/g," ")
  splitString1=splitString1.replace(/\s+/g,' ');

  splitString=splitString1.split(" ");
  //console.log("splitString1",splitString1);
  //console.log("splitString",splitString);
  flag=true;
 
  for (i = 0; i < splitString.length; i++) {
    if(splitString[i].length<4){
      //console.log("in if")
      flag=false
      break;
    }
    //console.log("in loop")
  }
  if(fname.match(letters) && (flag))
     {
       error.textContent = "correct";
       error.style.color = "green";
      
      return true;
     }
   else
     {
       //alert("Please enter only alphabets with atleast firstname and lastname, having min length 4")
       error.textContent = "Please enter only alphabets with atleast firstname and lastname, having min length 4"
       error.style.color = "red"
      return false;
     }
}
function validate()
  {
    // var output = document.getElementById("ip");
    // var output1 = document.getElementById("myinput");
   
    mailvalidation = emailValidation();
    nameValidation = fnameValidation();
    phonevalidation = myFunction1();
    //console.log(phonevalidation);
    if((mailvalidation) && (nameValidation) && (phonevalidation)){
     //console.log("in other if");
      // formfields.style.display="none";
      // output.style.display="block";
      
      //console.log("splitString1",splitString1)
      // document.myform.myinput.value = '1';
      // document.getElementById("demo").innerHTML = "Dear" + splitString[0] + "Thank you for your inquiry.";
      // output1.value='success';
      var otp = Math.floor(1000 + Math.random() * 9000);
      //console.log("random no",otp);
      window.location.href = "t.html?fname=" + splitString[0] + "&otp=" + otp + "&phno=" +d; 
    }
  }

function isNumber(evt)
{
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
             alert("Only numbers to be allowed to type");
 
         return true;
}
/*makenumber formate (803)-123-2345*/
const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
    );
};
const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
            // Allow Ctrl/Command + A,C,V,X,Z
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
};
const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if(!isNumericInput(event) && !isModifierKey(event)){
        event.preventDefault();
    }
};
const formatToPhone = (event) => {
    if(isModifierKey(event)) {return;}

    const input = event.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
    const areaCode = input.substring(0,3);
    const middle = input.substring(3,6);
    const last = input.substring(6,10);
/*
    if(input.length > 6){event.target.value = `(${areaCode}) ${middle} - ${last}`;}
    else if(input.length > 3){event.target.value = `(${areaCode}) ${middle}`;}
    else if(input.length > 0){event.target.value = `(${areaCode}`;}*/
    if(input.length > 6){event.target.value = `(${areaCode})  - ${middle} - ${last}`;}
    else if(input.length > 3){event.target.value = `(${areaCode}) ${middle}`;}
    else if(input.length > 0){event.target.value = `(${areaCode}`;}   


};
const inputElement = document.getElementById('phno');
inputElement.addEventListener('keydown',enforceFormat);
inputElement.addEventListener('keyup',formatToPhone);
function isalpha(evt)
{
          var charCode = (evt.which) ? evt.which : event.keyCode
           if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode<123) || (charCode==32))
             {
               return true;
                 // error.textContent = "";
             }
            // alert("Only numbers to be allowed to type");
            //error.textContent = "Please enter only alphabets";
          return false;
            //error.textContent = "Please enter only alphabets";
    // if(evt.charCode > 64 && evt.charCode < 91) || (evt.charCode > 96 && evt.charCode < 123) || (evt.charCode==32))
     //{
           
     //}
}
