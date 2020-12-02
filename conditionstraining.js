let guess = prompt("Who is There");


if (guess == "cancel") {
    alert("Canceled");

} else if (guess == "Admin") {
    let password = prompt("Password")
    if (password == "cancel") {
        alert("Cancel")
    }
    if (password = "Aslan") {
        alert("Welcome")
    } else {
        alert("Wrong Password Try Again");
    }
} else {
    alert("I dont know you")
}