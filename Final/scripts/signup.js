document.getElementById("myForm").addEventListener("submit",MyFun);
function MyFun(event){
  event.preventDefault();
  let Fname=document.getElementById("email").value;
  let ema=document.getElementById("bus").value;
  let pas=document.getElementById("password").value;
  
  console.log(Fname,ema,pas)
if(Fname=="" && ema=="" && pas==""){
  alert("Fill all the Fields")
}else{
  localStorage.setItem("fname",Fname);
  localStorage.setItem("ema",ema);
  localStorage.setItem("pas",pas);
  alert("Register Succesfully")
  window.location.href="main.html"
}
 

}