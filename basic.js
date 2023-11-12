// export function addNewUser(username, password, name, surname) {
//     fetch('http://localhost:8080/users/addUser', {
//         method: 'POST',
//         body: JSON.stringify({
//             username: username,
//             password: password,
//             name: name,
//             surname: surname
//           }),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json(); 
//     })
//     .then(data => {
//         console.log('Data received:', data);
//     })
//     .catch(error => {
//         console.error('Fetch error:', error);
//     });
// }
