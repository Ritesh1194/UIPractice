
function validate()
{ 
   if( document.EmployeeRegistration.employeename.value == "" )
   {
     alert( "Enter Employee Name!" );
     document.EmployeeRegistration.employeename.focus() ;
     return false;
   }
   
   if( document.EmployeeRegistration.paddress.value == "" )
   {
     alert( "Enter Employee Postal Address!" );
     document.EmployeeRegistration.paddress.focus() ;
     return false;
   }
   if( document.EmployeeRegistration.personaladdress.value == "" )
   {
     alert( "Enter Employee Personal Address!" );
     document.EmployeeRegistration.personaladdress.focus() ;
     return false;
   }
   if ( ( EmployeeRegistration.sex[0].checked == false ) && ( EmployeeRegistration.sex[1].checked == false ) )
   {
   alert ( "Enter Employee Gender: Male or Female" );
   return false;
   }   
   if( document.EmployeeRegistration.City.value == "-1" )
   {
     alert( "Enter Employee City!" );
     document.EmployeeRegistration.City.focus() ;
     return false;
   }   
   if( document.EmployeeRegistration.Course.value == "-1" )
   {
     alert( "Enter Employee Course!" );
    
     return false;
   }   
   if( document.EmployeeRegistration.District.value == "-1" )
   {
     alert( "Enter Employee Select District!" );
    
     return false;
   }   
   if( document.EmployeeRegistration.State.value == "-1" )
   {
     alert( "Enter Employee Select State!" );
     
     return false;
   }
   if( document.EmployeeRegistration.pincode.value == "" ||
           isNaN( document.EmployeeRegistration.pincode.value) ||
           document.EmployeeRegistration.pincode.value.length != 6 )
   {
     alert( "Enter Employee a pincode in the format ######." );
     document.EmployeeRegistration.pincode.focus() ;
     return false;
   }
 var email = document.EmployeeRegistration.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Enter Employee correct email ID")
     document.EmployeeRegistration.emailid.focus() ;
     return false;
 }
  if( document.EmployeeRegistration.dob.value == "" )
   {
     alert( "Enter Employee DOB!" );
     document.EmployeeRegistration.dob.focus() ;
     return false;
   }
  if( document.EmployeeRegistration.mobileno.value == "" ||
           isNaN( document.EmployeeRegistration.mobileno.value) ||
           document.EmployeeRegistration.mobileno.value.length != 10 )
   {
     alert( "Enter Employee a Mobile No in the format 123." );
     document.EmployeeRegistration.mobileno.focus() ;
     return false;
   }
   return( true );
}
