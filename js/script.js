// jQuery.validator.setDefaults({
//     debug: true,
//     success: "valid"
//   });
 
//   $( "#myform-id" ).validate({
//       rules: {
//         Uname: {
//         required: true,
        
//       },
      
//       Password: {
//         required: true,
//         minlength: 6
      
//     },
//     },
//  messages:{},
//  errorPlacement: function(error,element) {
//   return true;
// }
// //  errorElement : 'div',
// //  errorLabelContainer: ''
//     // messages: {
//     //     name: "فیلد نام وارد کن ",
//     //     email: { required:"فیلد ایمیل را وارد کن",
//     //                email:"ایمیل را درست وارد کن"
//     // },
//     //     age: {
//     //         required: "فیلد سن را وارد کن",
//     //         number: "داده را بصورت عددی وارد کن"
//     //     },
//     // }
//   });
 

   
// function functionValid(){
//     var test =$("#myform-id").valid();
//     console.log(test);
    
//     if (test === true){
//         var frm = $('#myform-id');
        
//         frm.submit(function (e) {
//         $.ajax({
//             url: 'https://api.noaeincloud.ir/api/sample',
//             data:frm.serialize(),
//             type: 'GET',
//             dataType: 'JSON',
//             beforeSend: function() {
          
//             },
//             success: function(xhr, response) {
//                 console.log(xhr)
//               if(xhr.status == true){
//                 alert("go page dash");
//               }
//               else{
//                 $("#message-id").css('display','block') ;
//               }
            
              
//               // swal({
//                 //     title: "it is registered !",
//                 //     text: "You clicked the button!",
//                 //     icon: "success",
//                 //     button: "Aww yiss!",
//                 //   });
//             },
//             error: function(xhr, status, error) {
              
//                 // swal ( xhr.message ,  "Something went wrong!" ,  "error" )
//                 alert('no')
//             },
         
//           });
        
//     })
//     }
    
//      }

// function functionValidate(){
  
//   var  formData = {
//   UserName : $('#user-id').val(),
//   Password :  $('#pass-id').val(),
//   };
  

//  if ( formData.UserName == "" && formData.Password == "" ){
   
//    $('#user-id').css('borderColor' , 'red');
//    $('#pass-id').css('borderColor', 'red');
//    return false;
//   }
  
//   else if ( formData.UserName != "" && formData.Password == "" ){
//     $('#pass-id').css('borderColor' ,'red');
//     $('#user-id').css('borderColor' , '#3d55db');
//     return false;
//   }
  
//   else if ( formData.UserName == "" && formData.Password != "" ){
//     $('#user-id').css('borderColor','red') ;
//     $('#pass-id').css('borderColor' , '#3d55db');
//     return false;
//   }

//   else {
//     $('#user-id').css('borderColor' , '#3d55db');
//     $('#pass-id').css('borderColor', '#3d55db');
//     // alert('yes');
    
//     $.ajax({
//       url: 'https://api.noaeincloud.ir/api/sample',
//       data: formData,
//       type: 'GET',
//       dataType: 'JSON',
//       beforeSend: function() {
//     },
    
//       success: function(xhr, response) {
//         console.log(xhr);
//         if(xhr.status == false){
//             alert("parisa true")
//           }
         
//       },
//       error: function(xhr, status, error) {
//         console.log("is error",xhr);
        
//           // swal ( xhr.message ,  "Something went wrong!" ,  "error" )
//       },
   
//     });
//   }
  
//  }
 // $(document).ready(function (e) {
//     $("#log").click(function (e) {
//
//         var name = $("#Uname").val();
//         var pass = $("#Pass").val();
//
//
//         $.ajax({
//             url: 'https://api.noaeincloud.ir/api/sample',
//             data: {"username": name, "password": pass},
//             type: 'GET',
//             dataType: 'JSON',
//             beforeSend: function () {
//                 // alert("gfh");
//             },
//             success: function (xhr, response) {
//
//                 if (xhr.status == true) {
//                     location.href = "http://127.0.0.1:8000/dash"
//
//                 }
//                  // if( showMessage(xhr['message'])){
//                  //     showMessage(xhr['message']);
//                  // }
//
//                 else {
//                     if( showMessage(xhr['message'])){
//                      showMessage(xhr['message'])};
//                 };
//             },
//             error: function (xhr, status, error) {
//
//                 },
//
//         });
//
//
//     });
//
//
// });
// function showMessage(message) {
//
//     var defultTtitle = "hellow world";
//     if (message.title) {
//         defultTtitle = message.title;
//     };
//
//     switch (message.type) {
//         case 'error':
//
//             swal({
//                 icon: 'error',
//                 title: defultTtitle,
//                 text: message.text,
//                 closeOnClickOutside: true,
//             })
//             break;
//
//         case 'success':
//             swal({
//                 icon: 'success',
//                 title: defultTtitle,
//                 text: message.text,
//                 closeOnClickOutside: true,
//             })
//             break;
//
//         case 'toast':
//             const Toast = Swal.mixin({
//                 toast: true,
//                 position: 'button',
//                 showConfirmButton: false,
//                 timer: 3000,
//                 timerProgressBar: true,
//                 didOpen: (toast) => {
//                     toast.addEventListener('mouseenter', Swal.stopTimer)
//                     toast.addEventListener('mouseleave', Swal.resumeTimer)
//                 }
//             })
//
//             Toast.fire({
//                 icon: 'success',
//                 title: 'Signed in successfully'
//             });
//     }
//
//
//
//
//
//
// // }
// function functionValidate() {
//     var formData = {
//          UserName : $('#user-id').val(),
//          Password : $('#pass-id').val(),
//     };
//
//     if (formData.UserName == "" && formData.Password == "") {
//         $('#user-id').css('borderColor', 'red');
//         $('#pass-id').css('borderColor', 'red');
//         return false;
//
//     } else if (formData.UserName != "" && formData.Password == "") {
//         $('#pass-id').css('borderColor', 'red');
//         return false;
//
//     } else if (formData.UserName == "" && formData.Password != "") {
//         $('#user-id').css('borderColor', 'red');
//         return false;
//     }
// else{
//
//         $.ajax({
//             url: 'https://api.noaeincloud.ir/api/sample',
//             data: formData,
//             type: 'GET',
//             dataType: 'JSON',
//             beforeSend: function() {
//
//             },
//             success: function(xhr, response) {
//                if(xhr.status == false ){
//
//                location.href = "http://127.0.0.1:8000/dash";
//                 }
//                else{
//                    alert("parisa")
//                }
//
//             },
//             error: function(xhr, status, error) {
//
//                 alert("fnlllllllo");
//                 $("#message-id").css("display","block");
//             },
//
//         });
//     return  true
//     }
// }
jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
});

$( "#myform-id" ).validate({
    rules: {
        Uname: {
            required: true,

        },

        Password: {
            required: true,


        },
    },
    messages:{},
    errorElement: "div",
    errorPlacement: function(error,element) {
        return true;
        },
//  errorElement : 'div',
//  errorLabelContainer: ''
    // messages: {
    //     name: "فیلد نام وارد کن ",
    //     email: { required:"فیلد ایمیل را وارد کن",
    //                email:"ایمیل را درست وارد کن"
    // },
    //     age: {
    //         required: "فیلد سن را وارد کن",
    //         number: "داده را بصورت عددی وارد کن"
    //     },
    // }
});


function functionValid(){
    var test =$("#myform-id").valid();


    if (test === true){
        var frm = $('#myform-id');

        frm.submit(function (e) {
            $.ajax({
                url: 'https://api.noaeincloud.ir/api/sample',
                data:frm.serialize(),
                type: 'GET',
                dataType: 'JSON',
                beforeSend: function() {

                },
                success: function(xhr, response) {

                    if(xhr.status == false){
                        location.href = "http://127.0.0.1:8000/dash";
                    }
                    else{
                        $("#message-id").css('display','block') ;
                    }


                    // swal({
                    //     title: "it is registered !",
                    //     text: "You clicked the button!",
                    //     icon: "success",
                    //     button: "Aww yiss!",
                    //   });
                },
                error: function(xhr, status, error) {

                    // swal ( xhr.message ,  "Something went wrong!" ,  "error" )
                    alert('no')
                },

            });

        })
    }

}
