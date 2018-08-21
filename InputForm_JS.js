var resultStatus = "yes";
function onlyAlphabets(e, t, nameOfTag) {
    debugger;
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        }
        else if (e) {
            var charCode = e.which;
        }
        else { return true; }
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
            {
                if(nameOfTag === 'fName')
                document.getElementById("fName_Error").value = " ";
                if(nameOfTag === 'lName')
                document.getElementById("lName_Error").value = " ";
                return true;
            }
        else
            {
                if(nameOfTag === 'fName')
                document.getElementById("fName_Error").value = "Only Alphabets allowed.";
                if(nameOfTag === 'lName')
                document.getElementById("lName_Error").value = "Only Alphabets allowed.";
                return false;
            }
    }
    catch (err) {
        document.getElementById("fName_Error").value = "Only Alphabets allowed.";
    }
}

function phonenumber(contact) {
    debugger;
    var numbers = /^[0-9]{7,10}$/;
    var len = contact.value.length;
    if(contact.value.length + 1 >= 10)
    {
        document.getElementById("contact_Error").value = "Contact must be of 10 digits!";
    }
    if(contact.value.length + 1 === 10)
    {
        document.getElementById("contact_Error").value = "";
    }
}

function validateLessThan9DigitContact() {
    debugger;
    contact = document.getElementById('contact').value;
    if(contact.length + 1 < 10)
    {
        document.getElementById("contact_Error").value = "Contact must be of 10 digits!";
        resultStatus = "no";
    } 
}

function validateEmailId() {
    debugger;
    email = document.getElementById("email").value;
  
    if ((!email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/))) {
        document.getElementById("email_Error").value = "Email Id is invalid!";
        resultStatus = "no";
    }
    if(email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/))
    {
        document.getElementById("email_Error").value = "";
    }
}

function goToWelcome() {
    debugger;
    var firstName = document.getElementById("fName_Error").value;
    var contactNumber = document.getElementById("contact_Error").value;
    var emailIdVal = document.getElementById("email_Error").value;
    if(firstName==="" && contactNumber===" " && emailIdVal ==="")
        window.location='welcome.html';
}

function validateFields() {
    debugger;
    if(document.getElementById("fName").value === "") {
        document.getElementById("fName_Error").value = "First Name is mandatory";
    }  
    if(document.getElementById("fName").value != "") {
        document.getElementById("fName_Error").value = "";
    }
}

function validateDropDown() {
    debugger;
    var City = document.getElementById("City").value;
    if (City == "None") {
        document.getElementById("city_Error").value = "Select a city!";
        resultStatus = "no";
    }
    if (City != "None") {
        document.getElementById("city_Error").value = "";
    }
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        document.getElementById("contact_Error").value = "Only Numbers allowed";
        return false;
    }
    else
    {
        document.getElementById("contact_Error").value = " ";
        return true;
    }
}

function validateGender() {
    debugger;
    var genders = document.getElementsByName("Gender");
    if (genders[0].checked == true) {
        document.getElementById('gender_Error').value = "";
    } 
    if (genders[1].checked == true) {
        document.getElementById('gender_Error').value = "";
    }
    if (genders[2].checked == true) {
        document.getElementById('gender_Error').value = "";
    }
    if(genders[0].checked == false && genders[1].checked == false && genders[2].checked == false)
    {
        // no checked
        document.getElementById('gender_Error').value = "You must select your gender!";
        return false;
    }
    return true;
}
