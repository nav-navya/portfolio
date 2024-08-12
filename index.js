
function sendMail(){
  var params ={
    name:document.getElementById("name").value ,
    email:document.getElementById("email").value,
    message:document.getElementById("message").value,
  };


const serviceID = "service_io4mkmk";
const templateID = "template_kengys8";

emailjs
.send(serviceID,templateID,params)
.then(
  res =>{
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Your message sent successfully")
  }
)
.catch(err=> console.log(err))

}

function toggleMenu(){
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}