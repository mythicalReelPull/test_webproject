function validateForm() {
        let firstName = document.getElementById("firstname");
        let lastName = document.getElementById("lastname");
        let email = document.getElementById("email");
        let phoneNumber = document.getElementById("phone-number").value.trim();
        let address = document.getElementById("address").value.trim();
        let cv = document.getElementById("cv").value.trim();

        let correct = true;

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let phoneNumberPattern = /^\d{9}$/;

        let cvPattern = /\.(pdf|doc|docx)$/i;

        if (firstName == "" || email == "" || lastName == "") {
        alert("Please fill out all required fields.");
        correct = false;
        }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        correct = false;
    }

    if (!phoneNumberPattern.test(phoneNumber)) {
        alert("Please enter a valid phone number. It should be 10 digits long.");
        correct = false;
    }
    if (phoneNumber.length < 10) {
        alert("Please enter a valid phone number");
        correct = false;
    }

    if (address.length < 6) {
        alert("Please enter a valid address (at least 10 characters).");
        correct = false;
    }


    let allowedExtensions = /(\.pdf|\.docx)$/i; // Regular expression for allowed file extensions
    if (!allowedExtensions.test(cv)) {
        alert("Please upload a CV in .pdf or .docx format.");
        correct = false;
    }
    if(!cvPattern.test(cv)) {
        alert("Please upload a valid CV file (PDF or DOCX).");
        correct = false;
    }

    if (new Date(birthday) > new Date()) {
        alert("Birthday cannot be in the future.");
        correct = false;
    }

}