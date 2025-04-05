function ClickonSubmitButton(event)
{
    event.preventDefault();
    const username=document.getElementById("username").value;
    const welcomeMessage=document.getElementById('welcomemessage');
    welcomeMessage.textContent = "welcome,"+username+"!";
    welcomeMessage.style.display='block';
}