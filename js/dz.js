function valid(form) {
    var fail = false;
    var name = form.name.value;
    var email = form.email.value;
    var phone = form.phone.value;
    var message = form.message.value;
    var name_pattern = /a-zA-Z/;
    var phone_pattern = /0-9/;
    var email_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;

    if (name == "") {
        fail = "You does not write a your name!";
    } else if (name_pattern.test(name) == false) {
        fail = "You entered your name incorrectly!";
    } else if (email == "") {
        fail = "You does not write a your email!";
    } else if (email_pattern.test(email) == false) {
        fail = "You entered your email incorrectly!";
    } else if (phone == "") {
        fail = "You does not write a your phone!";
    } else if (phone_pattern.test(phone) == false) {
        fail = "You entered your phone incorrectly";
    } else if (message == "") {
        fail = "You does not write a your message!";
    }

    if (fail) {
        alert(fail);
    }
}