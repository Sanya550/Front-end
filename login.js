
const loginElementButton = document.getElementById("login-btn")
const userNameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")

loginElementButton.onclick = function() {
    const userNameValue = userNameInput.value
    const passwordValue = passwordInput.value
    isUserExist(userNameValue, passwordValue).then(userExists => {
        if(userExists){
            const currentURL = window.location.href;
            const newUrl = currentURL.replace("login", "main");
            window.location.href = newUrl;
        }else{
            alert("Username or password are wrong")
        }
    });
}


function isUserExist(username, password) {
        return fetch("data.json")
        .then(response => response.json())
        .then(data1 => {
            let userExists = false;
            data1.users.forEach(element => {
                if (element.username === username && element.password === password) {
                    userExists = true;
                }
            });
            return userExists;
        })
        .catch(error => {
            console.error("Error fetching data on login page:", error);
            return false;
        });
}

