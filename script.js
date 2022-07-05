const togglePassword = document.getElementById("togglePassword");
    const pwd = document.getElementById("password");
    if (togglePassword) {
        togglePassword.addEventListener("click", (e) => {
            // toggle the type attribute
            const type =
                password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            // toggle the eye slash icon
            togglePassword.classList.toggle("zmdi-eye-off");
        });
    }

function validateForm(callback){
    let user=document.getElementById('username');
    var error = document.getElementById("error");
    var pstr=document.getElementById('strength-text')
    let status=false;
  
  if (user.value == "") {
    error.innerHTML = " *   Username is required.";
    error.style.color = "red";
    user.focus();
    
  } 
  else if(user.value =="admin"){
      error.innerHTML = "";
      if(pwd.value==""){
          pstr.innerHTML = " *   Password is required.";
          pstr.style.color="red";
          pwd.focus();
          
      }
      else if(pwd.value=="12345"){
          pstr.innerHTML="";
          status=true
          console.log("Login Validation Successful");
          callback(status);
      }
      else {
        pstr.style.color = "red";
        pstr.innerHTML=" *   Username/Password is invalid."}
        console.log("Login pwd invalid");

  }
  else {
    pstr.innerHTML = "  *  Username/Password is Invalid";
    pstr.style.color = "red";          console.log("Login id invalid");

    
  }
}
function redirect(stat){
    let form=document.getElementById('form');
    if(stat){
        form.submit();
        console.log("Form Submitted");

    }
}