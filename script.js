function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    if (name == "" || email == "" || phone == "") {
        alert("Please fill in all fields.");
        return false;
    }
    // Additional validation can be added here
    return true;
}

// JavaScript code for AJAX request
function saveData() {
    if (validateForm()) {
        var xhr = new XMLHttpRequest();
        var url = "save_data.php";
        var formData = new FormData(document.getElementById("myForm"));
        
        xhr.open("POST", url, true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Handle response from the server if needed
                console.log(xhr.responseText);
            }
        };
        xhr.send(formData);
    }
}
