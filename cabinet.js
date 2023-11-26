const buttonReturn = document.getElementById("returnToMainPage");
const userName = localStorage.getItem("currentUser")
const data = localStorage.getItem(userName+"Order")
if(data !== null && data !== "[]"){
    let sum1 = 0;
    let arrayObjects = JSON.parse(data)

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    let headers = Object.keys(arrayObjects[0]);
    headers.forEach(headerText => {
    let th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);
    let tbody = document.createElement('tbody');

    arrayObjects.forEach(rowData => {
    sum1+=rowData.summa
    let row = document.createElement('tr');
    headers.forEach(header => {
        let cell = document.createElement('td');
        cell.textContent = rowData[header];
        row.appendChild(cell);
    });

    tbody.appendChild(row);
    });

    table.appendChild(tbody);

    document.body.appendChild(table);
}else{
    const warning = document.getElementById("result");
    warning.innerHTML = "<p>Your history of orders is empty!</p>";    
} 

buttonReturn.onclick = function() {
    const currentURL = window.location.href;
    const newUrl = currentURL.replace("cabinet","main");
    window.location.href = newUrl;
}





