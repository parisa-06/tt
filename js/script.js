// jQuery.validator.setDefaults({
//     debug: true,
//     success: "valid"
//   });
 
//   $( "#myform-id" ).validate({
//       rules: {
//         Uname: {
//         required: true,
//         rangelength: [3, 10]
//       },
      
//       Password: {
//         required: true,
//         minlength: 5
//     },
//     },

//     messages: {
//         name: "فیلد نام وارد کن ",
//         email: { required:"فیلد ایمیل را وارد کن",
//                    email:"ایمیل را درست وارد کن"
//     },
//         age: {
//             required: "فیلد سن را وارد کن",
//             number: "داده را بصورت عددی وارد کن"
//         },
//     }
//   });



   
// function functionValid(){
//     var test =$("#myform").valid();
//     console.log(test);
    
//     if (test === true){
//         var frm = $('#myform');
        
//         frm.submit(function (e) {
//         $.ajax({
//             url: 'https://api.noaeincloud.ir/api/sample',
//             data:frm.serialize(),
//             type: 'GET',
//             dataType: 'JSON',
//             beforeSend: function() {
          
//             },
//             success: function(xhr, response) {
                
//                 swal({
//                     title: "it is registered !",
//                     text: "You clicked the button!",
//                     icon: "success",
//                     button: "Aww yiss!",
//                   });
//             },
//             error: function(xhr, status, error) {
              
//                 swal ( xhr.message ,  "Something went wrong!" ,  "error" )
//             },
         
//           });
        
//     })
//     }
    
//     }

function functionValidate(){
 
  var error;
  error = document.getElementById("message-error-id");

  var UserName = document.forms["myform-id"]["Uname"].value;
  var Password = document.forms["myform-id"]["Password"].value;
  
  if ( UserName == "" && Password == "" ){
   

    document.getElementById("user-id").style.borderColor = "#4964ff";
document.getElementById("pass-id").style.borderColor = "#4964ff";
// alert("no")
   return false;
  }
  
  else if ( UserName != "" && Password == "" ){
    
    
document.getElementById("pass-id").style.borderColor = "#4964ff";
  // alert("pass")
   return false;
  }
  
  else if ( UserName == "" && Password != "" ){
    document.getElementById("user-id").style.borderColor = "#4964ff";
//  alert("user")
   return false;
  }
  
 }
 