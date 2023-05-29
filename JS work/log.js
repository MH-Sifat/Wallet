document.getElementById('submit-buttton').addEventListener('click',function(){
    const emailInputField = document.getElementById('user-email');
    const email = emailInputField.value ;

    const passwordInputField = document.getElementById('user-password');
    const password = passwordInputField.value;

    if(email == 'admin@gmail.com' && password == 123456789){
        window.location.href = "banking.html"
    }
    else{
        alert('password does not matched')
    }
   
})

let eyeIcon = document.getElementById("show");
    let pass = document.getElementById("user-password");
     eyeIcon.onclick = function(){
      if(pass.type == "password"){
        pass.type  = "text";
        eyeIcon.src = "./icon/eye-open.png"
      }
      else{
        pass.type = "password";
        eyeIcon.src = "./icon/eye-close.png";
      }
     }


  