// export function updateCurrentUser(username) {
//     fetch('http://localhost:8080/users/currentUser', {
//         method: 'POST',
//         body: JSON.stringify({
//             username: username,
//           }),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         console.log("here")
//         return response.json(); 
//     })
//     .then(data => {
//         console.log('Data received:', data);
//     })
//     .catch(error => {
//         console.error('Fetch error:', error);
//     });
// }
