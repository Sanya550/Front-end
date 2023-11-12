const registerButton = document.getElementById("register-btn")
const userNameInput = document.getElementById("username")
const surnameInput = document.getElementById("surname")
const nameInput = document.getElementById("name")
const passwordInput = document.getElementById("password")
const confirmInput = document.getElementById("confirm_password")

registerButton.onclick = function() {
    const userNameValue = userNameInput.value
    const passwordValue = passwordInput.value
    const confirmPasswordValue = confirmInput.value
    const surnameValue = surnameInput.value
    const nameValue = nameInput.value
    if(userNameValue.length < 5 || passwordValue.length < 5 || nameValue.length < 3 || surnameValue.length < 3){
        alert("Wrong input data")
    }else{
    isUserExistByUsername(userNameValue).then(userExists => {
        if(userExists){
            alert("This username is already take. Choose another please")
        }else{
            if(passwordValue===confirmPasswordValue){
                addNewUser(nameValue, surnameValue, userNameValue, passwordValue)
            }else{
                alert("Password and ConfirmPassword values must be the same")
            }
        }
        
    });}
}

function isUserExistByUsername(username) {
        return fetch("data.json")
        .then(response => response.json())
        .then(data1 => {
            let userExists = false;
            data1.users.forEach(element => {
                if (element.username === username) {
                    userExists = true;
                }
            });
            return userExists;
        })
        .catch(error => {
            console.error("Error fetching data on register page: ", error);
            return true;
        });
}

function addNewUser(username, password, name, surname) {
    fetch('http://localhost:8080/users/addUser', {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password,
            name: name,
            surname: surname
          }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("here")
        return response.json(); 
    })
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
}

