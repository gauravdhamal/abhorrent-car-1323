document.getElementById("login").addEventListener("submit",MyFun);
function MyFun(event){
  event.preventDefault();
  let email=document.getElementById("email").value;
  let password=document.getElementById("password").value;
  
  let chkEmail=localStorage.getItem("ema");
  let chkPass=localStorage.getItem("pas");
 
  if(email==chkEmail && password==chkPass){
window.location.href="https://unsplash.com/"
  }else{
    alert("Email and Pass is incorrect");
  }
}