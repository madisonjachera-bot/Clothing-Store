

function handleSubmit(event) {
    
    event.preventDefault();
   
    let name = document.getElementById("name").value;
    
    let message = document.getElementById("message").value;
   
    if (name === "" || message === "") {
        
        document.getElementById("response").innerText = "Please fill out all fields.";
    
    } else {
        
        document.getElementById("response").innerText = "Thanks for the update, " + name + " — we'll take a look and get back to you.";
    
    }

}
   
   
   