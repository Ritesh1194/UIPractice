
function validate()
{ 
   if( document.EmployeeRegistration.employeename.value == "" )
   {
     alert( "Please provide your Name!" );
     document.EmployeeRegistration.employeename.focus() ;
     return false;
   }
   
   if( document.EmployeeRegistration.paddress.value == "" )
   {
     alert( "Please provide your Postal Address!" );
     document.EmployeeRegistration.paddress.focus() ;
     return false;
   }
   if( document.EmployeeRegistration.personaladdress.value == "" )
   {
     alert( "Please provide your Personal Address!" );
     document.EmployeeRegistration.personaladdress.focus() ;
     return false;
   }
   if ( ( EmployeeRegistration.sex[0].checked == false ) && ( EmployeeRegistration.sex[1].checked == false ) )
   {
   alert ( "Please choose your Gender: Male or Female" );
   return false;
   }   
   if( document.EmployeeRegistration.City.value == "-1" )
   {
     alert( "Please provide your City!" );
     document.EmployeeRegistration.City.focus() ;
     return false;
   }   
   if( document.EmployeeRegistration.Course.value == "-1" )
   {
     alert( "Please provide your Course!" );
    
     return false;
   }   
   if( document.EmployeeRegistration.District.value == "-1" )
   {
     alert( "Please provide your Select District!" );
    
     return false;
   }   
   if( document.EmployeeRegistration.State.value == "-1" )
   {
     alert( "Please provide your Select State!" );
     
     return false;
   }
   if( document.EmployeeRegistration.pincode.value == "" ||
           isNaN( document.EmployeeRegistration.pincode.value) ||
           document.EmployeeRegistration.pincode.value.length != 6 )
   {
     alert( "Please provide a pincode in the format ######." );
     document.EmployeeRegistration.pincode.focus() ;
     return false;
   }
 var email = document.EmployeeRegistration.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.EmployeeRegistration.emailid.focus() ;
     return false;
 }
  if( document.EmployeeRegistration.dob.value == "" )
   {
     alert( "Please provide your DOB!" );
     document.EmployeeRegistration.dob.focus() ;
     return false;
   }
  if( document.EmployeeRegistration.mobileno.value == "" ||
           isNaN( document.EmployeeRegistration.mobileno.value) ||
           document.EmployeeRegistration.mobileno.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.EmployeeRegistration.mobileno.focus() ;
     return false;
   }
   return( true );
}