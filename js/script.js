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
        minlength: 6
      
    },
    },
 messages:{},
 errorPlacement: function(error,element) {
  return true;
}
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
    console.log(test);
    
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
                console.log(xhr)
              if(xhr.status == true){
                alert("go page dash");
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
 